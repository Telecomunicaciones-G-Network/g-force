'use client';

import type { OnContactMessageReceivedResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';
import { Sounder } from '@sounder/classes/sounder.class';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnContactMessageReceivedMapper } from '@module-chat/infrastructure/mappers/on-contact-message-received.mapper';

import { revalidateChatContactsAction } from '@ui-chat/actions/revalidate-chat-contacts.action';

import { chatSoundDictionary } from '@ui-chat/dictionaries/chat-sounds.dictionary';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * @name useOnContactMessageReceived
 *
 * @description This hook listens to the on `new_message_received` socket event:
 * When a new message is received from a contact. Emitted to all agents of the team assigned to that contact.
 * Contains the minimum data of the message to establish the preview in the contact panel.
 * - Adds a new unread message to the contact in the store and update lastest message when a new message is received if contact is not ab active conversation
 * - Add a new unread message to the contact and play a notification sound if contact is not the active conversation and update lastest conversation.
 *
 * [Agent event]
 *
 * @returns void
 */
export const useOnContactMessageReceived = () => {
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
  // const sortContactsByLatestMessage = useContactStore(
  //   (state) => state.sortContactsByLatestMessage,
  // );

  onSocketEvent<OnContactMessageReceivedResponseDTO>(
    socketEventsDictionary.CONTACT_MESSAGE_RECEIVED,
    async (data: OnContactMessageReceivedResponseDTO) => {
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

      const response = OnContactMessageReceivedMapper.mapFrom(parseResponse);

      if (!response?.conversationId || !response?.contactId) return;
      // TODO: Set alert for error
      // TODO: Register error

      addOneUnreadMessageToContact({
        contactId: response?.contactId,
        lastMessage: response?.messageTextPreview,
        messageType: response?.messageType,
      });
      // sortContactsByLatestMessage();

      if (response?.contactId === activeContact?.id) return;

      if (
        response?.contactId !== activeContact?.id &&
        existContactOnStore(response?.contactId) &&
        isContactAssignedToMe(response?.contactId, activeAgent?.id)
      ) {
        const sounder = new Sounder(chatSoundDictionary.whatsappNotification);

        sounder.playAudio();

        return;
      }

      await revalidateChatContactsAction();
    },
  );
};
