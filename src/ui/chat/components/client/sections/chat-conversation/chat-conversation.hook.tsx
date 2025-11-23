'use client';

import type { GetChatMessagesResponse } from '@module-chat/domain/interfaces';

import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { useContactRoomStatus } from '@socketio/hooks/use-contact-room-status.hook';

import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';

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
    gcTime: 0,
    refetchOnMount: true,
    staleTime: 0,
  });

  const { isConnected, isInRoom } = useContactRoomStatus({
    autoJoin: true,
    contactId: activeContact?.id,
    joinRoomEventName: socketEmissionsDictionary.JOIN_CONTACT_ROOM,
    leaveRoomEventName: socketEmissionsDictionary.LEAVE_CONTACT_ROOM,
  });

  useEffect(() => {
    if (chatMessagesResponse?.messages) {
      setMessages(chatMessagesResponse?.messages);
    }
  }, [chatMessagesResponse?.messages, setMessages]);

  return {
    disabledChat: !isConnected || isError || !isInRoom || isLoading,
    isError,
    isLoading,
  };
};
