'use client';

import type { OnContactMessageSentResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';
import { Sounder } from '@sounder/classes/sounder.class';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnContactMessageSentMapper } from '@module-chat/infrastructure/mappers/on-contact-message-sent.mapper';

import { chatSoundDictionary } from '@ui-chat/dictionaries/chat-sounds.dictionary';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * @name useOnContactMessageSent
 *
 * @description This hook listens to the on `new_message_sent` socket event:
 * When an agent sends a new message in the chat of a contact. Includes both normal messages that reach the contact as
 * internal and event messages. Emitted to all agents of the team assigned to that contact. Contains the minimum data of the
 * message to establish the preview in the contact panel.
 * - Adds a new unread message to the contact in the store and update lastest message when a new message is sent if contact is not ab active conversation
 *
 * [Agent event]
 *
 * @returns void
 */
export const useOnContactMessageSent = () => {
  const activeAgent = useContactStore((state) => state.activeAgent);
  const activeContact = useContactStore((state) => state.activeContact);

  const addOneUnreadMessageToContact = useContactStore(
    (state) => state.addOneUnreadMessageToContact,
  );
  const existContactOnStore = useContactStore(
    (state) => state.existContactOnStore,
  );
  const isContactAssignedToMe = useContactStore(
    (state) => state.isContactAssignedToMe,
  );
  const sortContactsByLatestMessage = useContactStore(
    (state) => state.sortContactsByLatestMessage,
  );

  onSocketEvent<OnContactMessageSentResponseDTO>(
    socketEventsDictionary.CONTACT_MESSAGE_SENT,
    (data: OnContactMessageSentResponseDTO) => {
      const parseResponse = JSON.parse(data as unknown as string);

      if (
        !parseResponse?.contact_id ||
        !parseResponse?.conversation_id ||
        !parseResponse?.message_id ||
        !parseResponse?.message_type
      )
        // TODO: Set alert for error
        // TODO: Register error
        return;

      const response = OnContactMessageSentMapper.mapFrom(parseResponse);

      if (
        !response?.conversationId ||
        !response?.contactId ||
        !response?.messageId ||
        !response?.messageType
      )
        // TODO: Set alert for error
        // TODO: Register error
        return;

      addOneUnreadMessageToContact({
        contactId: response?.contactId,
        lastMessage: response?.messageTextPreview,
        messageType: response?.messageType,
      });
      sortContactsByLatestMessage();

      if (
        response?.contactId !== activeContact?.id &&
        existContactOnStore(response?.contactId) &&
        isContactAssignedToMe(response?.contactId, activeAgent?.id)
      ) {
        const sounder = new Sounder(chatSoundDictionary.whatsappNotification);

        sounder.playAudio();
      }
    },
  );
};
