'use client';

import type { OnContactConversationFinishedResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { ConversationStatus } from '@module-chat/domain/enums/conversation-status.enum';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnContactConversationFinishedMapper } from '@module-chat/infrastructure/mappers/on-contact-conversation-finished.mapper';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * @name useOnContactConversationFinished
 *
 * @description This hook listens to the on `contact_finished` socket event:
 * When a contact conversation is finished. Emitted to the agent that finished the conversation.
 * Contains the ID of the contact and their current conversation.
 * - Deletes the contact from the store when a contact conversation is finished.
 *
 * [Agent event]
 *
 * @returns void
 */
export const useOnContactConversationFinished = () => {
  const conversationStatus = useContactStore(
    (state) => state.conversationStatus,
  );

  const deleteOneContactById = useContactStore(
    (state) => state.deleteOneContactById,
  );
  const updateContactLatestConversation = useContactStore(
    (state) => state.updateContactLatestConversation,
  );

  onSocketEvent<OnContactConversationFinishedResponseDTO>(
    socketEventsDictionary.CONTACT_CONVERSATION_FINISHED,
    (data: OnContactConversationFinishedResponseDTO) => {
      const parseResponse = JSON.parse(data as unknown as string);

      if (!parseResponse?.contact_id || !parseResponse?.conversation_id) return;
      // TODO: Set alert for error
      // TODO: Register error

      const response =
        OnContactConversationFinishedMapper.mapFrom(parseResponse);

      if (!response?.contactId || !response?.conversationId) return;
      // TODO: Set alert for error
      // TODO: Register error

      if (
        conversationStatus === null ||
        conversationStatus === ConversationStatus.FINISHED
      ) {
        updateContactLatestConversation(response?.contactId, {
          status: ConversationStatus.FINISHED,
        });

        return;
      }

      deleteOneContactById(response?.contactId);
    },
  );
};
