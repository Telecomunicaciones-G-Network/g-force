'use client';

import type { OnNewMessageReceivedResponseDTO } from '@module-chat/infrastructure/dtos';

import { useRouter } from 'next/navigation';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';
import { Sounder } from '@sounder/classes/sounder.class';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnNewMessageReceivedMapper } from '@module-chat/infrastructure/mappers/on-new-message-received.mapper';

import { revalidateChatContactsAction } from '@ui-chat/actions/revalidate-chat-contacts.action';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useOnNewMessageReceived = () => {
  const router = useRouter();

  const activeContact = useContactStore((state) => state.activeContact);

  const addOneUnreadMessageToContact = useContactStore(
    (state) => state.addOneUnreadMessageToContact,
  );
  const existContactOnStore = useContactStore(
    (state) => state.existContactOnStore,
  );
  const sortContactsByLatestMessage = useContactStore(
    (state) => state.sortContactsByLatestMessage,
  );

  onSocketEvent<OnNewMessageReceivedResponseDTO>(
    socketEventsDictionary.NEW_MESSAGE_RECEIVED,
    async (data) => {
      const parseResponse = JSON.parse(data as unknown as string);

      const response = OnNewMessageReceivedMapper.mapFrom(parseResponse);

      if (!response?.conversationId || !response?.contactId) return;

      if (response?.contactId !== activeContact?.id) {
        const sounder = new Sounder('/sounds/whatsapp-notification.mp3');

        sounder.playAudio();
      }

      if (existContactOnStore(response?.contactId)) {
        addOneUnreadMessageToContact({
          contactId: response?.contactId,
          lastMessage: response?.messageTextPreview,
          activeContact,
        });
        sortContactsByLatestMessage();

        return;
      }

      await revalidateChatContactsAction();

      router.refresh();
    },
  );
};
