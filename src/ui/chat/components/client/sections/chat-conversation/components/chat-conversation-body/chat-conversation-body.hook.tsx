// PENDING:
// TODO: Debo agregar la key de eventos de socket a un diccionario de recursos de socketio

'use client';

import type { OnIncommingMessageResponseDTO } from '@module-chat/infrastructure/dtos';

import { useScrollToBottom } from '@hookers/use-scroll-to-bottom.hook';
import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { GetSocketOnIncommingMessage } from '@module-chat/application/usecases/on-incomming-message.usecase';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';
import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

export const useChatConversationBody = () => {
  const activeContact = useContactStore((state) => state.activeContact);
  const messages = useChatStore((state) => state.messages);

  const setMessages = useChatStore((state) => state.setMessages);

  const { ref: messagesContainerRef } = useScrollToBottom<HTMLDivElement>({
    autoScroll: true,
    dependencies: [messages],
    behavior: 'smooth',
  });

  onSocketEvent(
    'incoming_message',
    (data: OnIncommingMessageResponseDTO) => {
      console.log(
        'New message received:',
        JSON.parse(data as unknown as string),
      );

      const parseResponse = JSON.parse(data as unknown as string);

      const contact_id = activeContact?.id ?? '';
      const newMessage = GetSocketOnIncommingMessage(parseResponse, {
        id: contact_id,
        name: activeContact?.name ?? '',
      });

      setMessages([...messages, newMessage]);
    },
    [activeContact?.id],
  );

  return {
    messagesContainerRef,
    messages,
  };
};
