'use client';

import type { OnIncommingMessageDTO } from '@module-chat/infrastructure/dtos';

import { useScrollToBottom } from '@hookers/use-scroll-to-bottom.hook';
import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnIncommingMessageSubscription } from '@module-chat/infrastructure/subscriptions/on-incomming-message.subscription';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatConversationBody = () => {
  const activeContact = useContactStore((state) => state.activeContact);
  const messages = useChatStore((state) => state.messages);

  const addMessage = useChatStore((state) => state.addMessage);

  const { ref: messagesContainerRef } = useScrollToBottom<HTMLDivElement>({
    autoScroll: true,
    dependencies: [messages],
    behavior: 'smooth',
  });

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
    },
    [activeContact?.id, addMessage],
  );

  return {
    messagesContainerRef,
    messages,
  };
};
