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
 * This hook listens to the `contact_assignment_updated` socket event
 * When the team and/or agent assigned to a contact changes. Emitted to all involved and dis-involved agents.
 * Contains the data of the assigned team and agent and the IDs of the contact and their current conversation.
 * - Updates the contact list if contact does not exists on store.
 * - Updates the contact conversation information, status, agent and team.
 * [Agent event]
 */
export const useOnContactAssignmentUpdated = () => {
  const existContactOnStore = useContactStore(
    (state) => state.existContactOnStore,
  );
  const updateContactLatestConversation = useContactStore(
    (state) => state.updateContactLatestConversation,
  );

  onSocketEvent<OnContactAssignmentUpdatedResponseDTO>(
    socketEventsDictionary.CONTACT_ASSIGNMENT_UPDATED,
    async (data: OnContactAssignmentUpdatedResponseDTO) => {
      const parseResponse = JSON.parse(data as unknown as string);

      if (
        !parseResponse?.agent?.id ||
        !parseResponse?.agent?.full_name ||
        !parseResponse?.contact_id ||
        !parseResponse?.conversation_id ||
        !parseResponse?.team?.codename ||
        !parseResponse?.team?.name
      )
        // TODO: Set alert for error
        // TODO: Register error
        return;

      const response = OnContactAssignmentUpdatedMapper.mapFrom(parseResponse);

      if (
        !response?.agent?.id ||
        !response?.agent?.name ||
        !response?.contactId ||
        !response?.team?.id ||
        !response?.team?.name
      )
        // TODO: Set alert for error
        // TODO: Register error
        return;

      const existContactOnStoreValidation = existContactOnStore(
        response?.contactId,
      );

      if (existContactOnStoreValidation) {
        updateContactLatestConversation(response?.contactId, {
          agent: response?.agent
            ? {
                id: response?.agent?.id,
                name: response?.agent?.name,
              }
            : null,
          status: response?.agent
            ? ConversationStatus.ASSIGNED
            : ConversationStatus.WAITING,
          team: response?.team
            ? {
                id: response?.team?.id,
                name: response?.team?.name,
              }
            : null,
        });

        return;
      }

      const sounder = new Sounder(chatSoundDictionary.contactAssignment);

      sounder.playAudio();

      await revalidateChatContactsAction();
    },
  );
};
