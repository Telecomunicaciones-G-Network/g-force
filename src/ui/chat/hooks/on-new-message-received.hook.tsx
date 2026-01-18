'use client';

import type { OnNewMessageReceivedResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';
import { Sounder } from '@sounder/classes/sounder.class';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnNewMessageReceivedMapper } from '@module-chat/infrastructure/mappers/on-new-message-received.mapper';

import { revalidateChatContactsAction } from '@ui-chat/actions/revalidate-chat-contacts.action';

import { chatSoundDictionary } from '@ui-chat/dictionaries/chat-sounds.dictionary';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * On new message received hook
 *
 * This hook listens to the on `new_message_received` socket event:
 * When a new message is received from a contact. Emitted to all agents of the team assigned to that contact. Contains the minimum data of the message to establish the preview in the contact panel.
 * - Adds a new unread message to the contact in the store and update lastest message when a new message is received if contact is not ab active conversation
 * - Add a new unread message to the contact and play a notification sound if contact is not the active conversation and update lastest conversation.
 * [Agent event]
 */
export const useOnNewMessageReceived = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  const addOneUnreadMessageToContact = useContactStore(
    (state) => state.addOneUnreadMessageToContact,
  );
  const sortContactsByLatestMessage = useContactStore(
    (state) => state.sortContactsByLatestMessage,
  );

  onSocketEvent<OnNewMessageReceivedResponseDTO>(
    socketEventsDictionary.NEW_MESSAGE_RECEIVED,
    async (data: OnNewMessageReceivedResponseDTO) => {
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

      const response = OnNewMessageReceivedMapper.mapFrom(parseResponse);

      if (!response?.conversationId || !response?.contactId) return;
      // TODO: Set alert for error
      // TODO: Register error

      if (response?.contactId === activeContact?.id) {
        addOneUnreadMessageToContact({
          contactId: response?.contactId,
          lastMessage: response?.messageTextPreview,
          messageType: response?.messageType,
        });
        sortContactsByLatestMessage();

        return;
      }

      if (response?.contactId !== activeContact?.id) {
        addOneUnreadMessageToContact({
          contactId: response?.contactId,
          lastMessage: response?.messageTextPreview,
          messageType: response?.messageType,
        });
        sortContactsByLatestMessage();

        const sounder = new Sounder(chatSoundDictionary.whatsappNotification);

        sounder.playAudio();

        return;
      }

      await revalidateChatContactsAction();
    },
  );
};
