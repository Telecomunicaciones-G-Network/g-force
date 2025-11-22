'use client';

import type { OnIncommingMessageDTO } from '@module-chat/infrastructure/dtos';

import { useCallback } from 'react';

import { useScrollToBottom } from '@hookers/use-scroll-to-bottom.hook';
import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';
import { useSocket } from '@socketio/hooks/use-socket.hook';

import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';
import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnIncommingMessageSubscription } from '@module-chat/infrastructure/subscriptions/on-incomming-message.subscription';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

interface UseChatConversationBodyProps {
  disabledChat?: boolean;
}

export const useChatConversationBody = ({
  disabledChat = false,
}: Readonly<UseChatConversationBodyProps>) => {
  const activeContact = useContactStore((state) => state.activeContact);
  const messages = useChatStore((state) => state.messages);

  const addMessage = useChatStore((state) => state.addMessage);

  const { ref: messagesContainerRef } = useScrollToBottom<HTMLDivElement>({
    autoScroll: true,
    dependencies: [messages],
    behavior: 'smooth',
  });
  const { emitWithAck } = useSocket();

  const markMessageAsRead = useCallback(
    async (messageId: string) => {
      try {
        const response = await emitWithAck?.(
          socketEmissionsDictionary.MARK_MESSAGE_AS_READ,
          {
            message_id: messageId,
          },
        );

        console.log('response', response);
      } catch (error) {
        console.error('error', error);
      }
    },
    [emitWithAck],
  );

  onSocketEvent<OnIncommingMessageDTO>(
    socketEventsDictionary.INCOMING_MESSAGE,
    (data) => {
      const parseResponse = JSON.parse(data as unknown as string);

      const newMessage = OnIncommingMessageSubscription(
        parseResponse,
        activeContact,
      );

      if (newMessage) {
        addMessage(newMessage);
      }

      if (newMessage && !disabledChat) {
        console.log('Debo marcar el mensaje como leido', newMessage?.id);

        markMessageAsRead(newMessage?.id);
      }
    },
    [activeContact?.id, addMessage],
  );

  return {
    messagesContainerRef,
    messages,
  };
};
