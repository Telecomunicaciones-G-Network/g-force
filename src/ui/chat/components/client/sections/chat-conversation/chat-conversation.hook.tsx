// PENDING:
// TODO: Debo ver ese caso de uso que no cuadra alli

'use client';

import type { GetChatMessagesResponse } from '@module-chat/domain/interfaces';

import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { useContactRoomStatus } from '@socketio/hooks/use-contact-room-status.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';
import { GetChatMessagesQuery } from '@module-chat/infrastructure/queries/get-chat-messages.query';

import { queryKeysDictionary } from '@/src/ui/chat/dictionaries/query-keys.dictionary';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatConversation = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  const setMessages = useChatStore((state) => state.setMessages);

  const {
    data: chatMessagesResponse,
    isError,
    isLoading,
  } = useQuery<GetChatMessagesResponse>({
    queryKey: [
      queryKeysDictionary.GET_CHAT_MESSAGES,
      activeContact?.id,
      { limit: 10 },
    ],
    queryFn: () =>
      GetChatMessagesQuery({
        contactId: activeContact?.id ?? '',
        limit: 10,
      }),
    enabled: !!activeContact?.id,
  });
  const { isConnected, isInRoom } = useContactRoomStatus({
    autoJoin: true,
    contactId: activeContact?.id,
    joinRoomEventName: socketEventsDictionary.JOIN_CONTACT_ROOM,
    leaveRoomEventName: socketEventsDictionary.LEAVE_CONTACT_ROOM,
  });

  useEffect(() => {
    if (chatMessagesResponse?.messages) {
      setMessages(chatMessagesResponse?.messages);
    }
  }, [chatMessagesResponse?.messages, setMessages]);

  return {
    isConnected,
    isError,
    isInRoom,
    isLoading,
  };
};
