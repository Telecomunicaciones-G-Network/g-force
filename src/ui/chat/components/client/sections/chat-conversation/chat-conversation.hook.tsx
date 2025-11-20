// PENDING:
// TODO: Debo manejar los sockets events de emision y recepcion como casos de uso
// TODO: Debo colocar la key de react query en un diccionario de recursos
// TODO: Debo quitar esa contante de limit de alli
// FIXME: Debo revisar porque el tiempo de peticion de los mensajes es demasiado elevado de 5 a 12 segundos
// IMPROVE: Los eventos de socket debo colocarlos en un diccionario de eventos

'use client';

import type { GetChatMessagesResponse } from '@module-chat/domain/interfaces';
import type { OnIncommingMessageResponseDTO } from '@module-chat/infrastructure/dtos';

import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { useScrollToBottom } from '@hookers/use-scroll-to-bottom.hook';
import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { GetSocketOnIncommingMessage } from '@module-chat/application/usecases/on-incomming-message.usecase';

import { GetChatMessagesQuery } from '@module-chat/infrastructure/queries/get-chat-messages.query';

import { useSocket } from '@socketio/hooks/use-socket.hook';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

const limit = 10;

export const useChatConversation = () => {
  const { emit, emitWithAck, isConnected } = useSocket();

  const activeContact = useContactStore((state) => state.activeContact);
  const messages = useChatStore((state) => state.messages);

  const { ref: messagesContainerRef } = useScrollToBottom<HTMLDivElement>({
    autoScroll: true,
    dependencies: [messages],
    behavior: 'smooth',
  });

  const {
    data: chatMessagesResponse,
    isError,
    isLoading,
  } = useQuery<GetChatMessagesResponse>({
    queryKey: ['chat-messages', activeContact?.id, { limit }],
    queryFn: () =>
      GetChatMessagesQuery({
        contactId: activeContact?.id ?? '',
        limit,
      }),
    enabled: !!activeContact?.id,
  });

  const setMessages = useChatStore((state) => state.setMessages);
  const setActiveContact = useContactStore((state) => state.setActiveContact);
  const setChatMode = useContactStore((state) => state.setChatMode);

  const goBackChatList = () => {
    setChatMode(ChatModes.LIST);
    setActiveContact(null);
  };

  const goToChatDetails = () =>
    useContactStore.setState({ chatMode: ChatModes.DETAILS });

  useEffect(() => {
    if (chatMessagesResponse?.messages) {
      setMessages(chatMessagesResponse?.messages);
    }
  }, [chatMessagesResponse?.messages, setMessages]);

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

  useEffect(() => {
    if (!activeContact?.id || !isConnected || !emitWithAck || !emit) return;

    const contact_id = activeContact.id;

    emitWithAck<{ contact_id: string }, { success: boolean; message?: string }>(
      'join_contact_room',
      { contact_id },
    )
      .then((response) => {
        console.log('Successfully joined contact room:', response);
      })
      .catch((error) => {
        console.error('Failed to join contact room:', error);
      });

    return () => {
      if (emit) {
        emit('leave_contact_room', { contact_id });
      }
    };
  }, [activeContact?.id, isConnected, emit, emitWithAck]);

  return {
    activeContact,
    goBackChatList,
    goToChatDetails,
    isError,
    isLoading,
    messages,
    messagesContainerRef,
  };
};
