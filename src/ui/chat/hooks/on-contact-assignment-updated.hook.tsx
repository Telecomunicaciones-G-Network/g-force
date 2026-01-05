'use client';

import type { OnContactAssignmentUpdatedResponseDTO } from '@module-chat/infrastructure/dtos';

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
 * This hook listens to the `contact_assignment_updated` socket event and updates the contact list if contact does not exists on store.
 * Also, it updates the contact conversation status to Assigned if contact exists but conversation sttus is different from aSSIGNED STATUS.
 */
export const useOnContactAssignmentUpdated = () => {
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

      if (
        !response?.agent?.id ||
        !response?.agent?.name ||
        !response?.contactId ||
        !response?.team?.id ||
        !response?.team?.name
      )
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
            id: response?.agent?.id,
            name: response?.agent?.name,
          },
          status: ConversationStatus.ASSIGNED,
          team: {
            id: response?.team?.id,
            name: response?.team?.name,
          },
        });

        const sounder = new Sounder(chatSoundDictionary.contactAssignment);

        sounder.playAudio();

        return;
      }

      await revalidateChatContactsAction();
    },
  );
};
