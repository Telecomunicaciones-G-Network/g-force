'use client';

import { useRouter } from 'next/navigation';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnNewMessageReceivedMapper } from '@module-chat/infrastructure/mappers/on-new-message-received.mapper';

import { revalidateChatContactsAction } from '@ui-chat/actions/revalidate-chat-contacts.action';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useOnNewMessageReceived = () => {
  const router = useRouter();

  const existContactOnStore = useContactStore(
    (state) => state.existContactOnStore,
  );

  onSocketEvent<unknown>(
    socketEventsDictionary.NEW_MESSAGE_RECEIVED_EVENT,
    async (data) => {
      const parseResponse = JSON.parse(data as unknown as string);
      const response = OnNewMessageReceivedMapper.mapFrom(parseResponse);

      if (
        !response?.conversationId ||
        !response?.contactId ||
        existContactOnStore(response?.contactId)
      )
        return;

      await revalidateChatContactsAction();

      router.refresh();
    },
  );
};
