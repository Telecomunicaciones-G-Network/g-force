'use client';

import type { OnContactAssignmentUpdatedResponseDTO } from '@module-chat/infrastructure/dtos';

import { useRouter } from 'next/navigation';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';
import { Sounder } from '@sounder/classes/sounder.class';

import { ConversationStatus } from '@module-chat/domain/enums/conversation-status.enum';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnContactAssignmentUpdatedMapper } from '@module-chat/infrastructure/mappers/on-contact-assignment-updated.mapper';

import { revalidateChatContactsAction } from '@ui-chat/actions/revalidate-chat-contacts.action';

import { chatSoundDictionary } from '@ui-chat/dictionaries/chat-sounds.dictionary';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * On contact assignment updated hook
 *
 * This hook listens to the `contact_assignment_updated` socket event and updates the latest conversation
 * information in the contact store, conversation status, agent and team.
 */
export const useOnContactAssignmentUpdated = () => {
  const router = useRouter();

  const existContactOnStore = useContactStore(
    (state) => state.existContactOnStore,
  );
  const hasContactConversationAssigned = useContactStore(
    (state) => state.hasContactConversationAssigned,
  );
  const updateContactLatestConversation = useContactStore(
    (state) => state.updateContactLatestConversation,
  );

  onSocketEvent<OnContactAssignmentUpdatedResponseDTO>(
    socketEventsDictionary.CONTACT_ASSIGNMENT_UPDATED,
    async (data) => {
      const parseResponse = JSON.parse(data as unknown as string);
      const response = OnContactAssignmentUpdatedMapper.mapFrom(parseResponse);

      if (!response?.agentId || !response?.agentName || !response?.contactId)
        return;

      const existContactOnStoreValidation = existContactOnStore(
        response?.contactId,
      );
      const hasContactConversationAssignedValidation =
        hasContactConversationAssigned(response?.contactId);

      if (
        existContactOnStoreValidation &&
        hasContactConversationAssignedValidation
      )
        return;

      if (
        existContactOnStoreValidation &&
        !hasContactConversationAssignedValidation
      ) {
        updateContactLatestConversation(response?.contactId, {
          agent: {
            id: response?.agentId,
            name: response?.agentName,
          },
          status: ConversationStatus.ASSIGNED,
          team: {
            id: response?.teamId,
            name: response?.teamName,
          },
        });

        const sounder = new Sounder(chatSoundDictionary.contactAssignment);

        sounder.playAudio();

        return;
      }

      await revalidateChatContactsAction();

      router.refresh();
    },
  );
};
