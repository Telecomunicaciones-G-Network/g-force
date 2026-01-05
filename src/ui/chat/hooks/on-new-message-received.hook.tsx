'use client';

import type { OnNewMessageReceivedResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';
import { Sounder } from '@sounder/classes/sounder.class';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnNewMessageReceivedMapper } from '@module-chat/infrastructure/mappers/on-new-message-received.mapper';

import { revalidateChatContactsAction } from '@ui-chat/actions/revalidate-chat-contacts.action';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * On new message received hook
 *
 * This hook listens to the on `new_message_received` socket event:
 * - Adds a new unread message to the contact in the store and update lastest message when a new message is received if contact is not ab active conversation
 * - Add a new unread message to the contact and play a notification sound if contact is not the active conversation and update lastest conversation.
 * [Agent event]
 */
export const useOnNewMessageReceived = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  const addOneUnreadMessageToContact = useContactStore(
    (state) => state.addOneUnreadMessageToContact,
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
        return;

      const response = OnNewMessageReceivedMapper.mapFrom(parseResponse);

      if (!response?.conversationId || !response?.contactId) return;

      if (response?.contactId === activeContact?.id) {
        addOneUnreadMessageToContact({
          contactId: response?.contactId,
          lastMessage: response?.messageTextPreview,
          messageType: response?.messageType,
        });

        return;
      }

      if (response?.contactId !== activeContact?.id) {
        addOneUnreadMessageToContact({
          contactId: response?.contactId,
          lastMessage: response?.messageTextPreview,
          messageType: response?.messageType,
        });

        const sounder = new Sounder('/sounds/whatsapp-notification.mp3');

        sounder.playAudio();

        return;
      }

      await revalidateChatContactsAction();
    },
  );
};
