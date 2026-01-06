'use client';

import type { OnNewMessageSentResponseDTO } from '@/src/modules/chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnNewMessageSentMapper } from '@module-chat/infrastructure/mappers/on-new-message-sent.mapper';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * On new message sent hook
 *
 * This hook listens to the on `new_message_sent` socket event:
 * - Adds a new unread message to the contact in the store and update lastest message when a new message is sent if contact is not ab active conversation
 * [Agent event]
 */
export const useOnNewMessageSent = () => {
  const addOneUnreadMessageToContact = useContactStore(
    (state) => state.addOneUnreadMessageToContact,
  );
  const sortContactsByLatestMessage = useContactStore(
    (state) => state.sortContactsByLatestMessage,
  );

  onSocketEvent<OnNewMessageSentResponseDTO>(
    socketEventsDictionary.NEW_MESSAGE_SENT,
    (data: OnNewMessageSentResponseDTO) => {
      const parseResponse = JSON.parse(data as unknown as string);

      if (
        !parseResponse?.contact_id ||
        !parseResponse?.conversation_id ||
        !parseResponse?.message_id ||
        !parseResponse?.message_type
      )
        return;

      const response = OnNewMessageSentMapper.mapFrom(parseResponse);

      if (
        !response?.conversationId ||
        !response?.contactId ||
        !response?.messageId ||
        !response?.messageType
      )
        return;

      addOneUnreadMessageToContact({
        contactId: response?.contactId,
        lastMessage: response?.messageTextPreview,
        messageType: response?.messageType,
      });
      sortContactsByLatestMessage();
    },
  );
};
