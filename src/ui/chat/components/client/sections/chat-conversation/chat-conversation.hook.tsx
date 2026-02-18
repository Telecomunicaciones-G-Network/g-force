'use client';

import type { GetChatMessagesResponse } from '@module-chat/domain/interfaces';

import { useCallback, useEffect, useRef, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { useContactRoomStatus } from '@socketio/hooks/use-contact-room-status.hook';

import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';

import { GetChatMessagesQuery } from '@module-chat/infrastructure/queries/get-chat-messages.query';

import { CHAT_CONTACT_CONVERSATION_DISABLED } from '@ui-chat/constants/chat-contact-conversation-disabled.constant';

import { queryKeysDictionary } from '@/src/ui/chat/dictionaries/query-keys.dictionary';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatConversation = () => {
  const activeAgent = useContactStore((state) => state.activeAgent);
  const activeContact = useContactStore((state) => state.activeContact);
  const sendMode = useChatStore((state) => state.sendMode);
  const messagesNextPage = useChatStore((state) => state.messagesNextPage);

  const addMessages = useChatStore((state) => state.addMessages);
  const changeMessagesPagination = useChatStore(
    (state) => state.changeMessagesPagination,
  );
  const setMessages = useChatStore((state) => state.setMessages);

  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const isLoadingMoreRef = useRef<boolean>(false);

  const {
    data: chatMessagesResponse,
    isError,
    isLoading,
  } = useQuery<GetChatMessagesResponse>({
    queryKey: [
      queryKeysDictionary.GET_CHAT_MESSAGES,
      activeContact?.id,
      { limit: 20 },
    ],
    queryFn: () =>
      GetChatMessagesQuery({
        contactId: activeContact?.id ?? '',
        limit: 20,
      }),
    enabled: !!activeContact?.id,
    gcTime: 0,
  });

  const { isConnected, isInRoom } = useContactRoomStatus({
    contactId: activeContact?.id,
    joinRoomEventName: socketEmissionsDictionary.ENTER_CHAT_ROOM,
    leaveRoomEventName: socketEmissionsDictionary.LEAVE_CHAT_ROOM,
  });

  useEffect(() => {
    if (chatMessagesResponse?.messages) {
      setMessages(chatMessagesResponse?.messages);
    }

    if (chatMessagesResponse) {
      changeMessagesPagination({
        hasMore: chatMessagesResponse.hasMore ?? false,
        nextCursor: chatMessagesResponse.nextCursor ?? null,
      });
    }
  }, [chatMessagesResponse, setMessages, changeMessagesPagination]);

  const fetchNextMessages = useCallback(async () => {
    if (
      !activeContact?.id ||
      !messagesNextPage ||
      isLoadingMore ||
      isLoadingMoreRef.current
    ) {
      return;
    }

    try {
      isLoadingMoreRef.current = true;
      setIsLoadingMore(true);

      const response = await GetChatMessagesQuery({
        contactId: activeContact.id,
        cursor: messagesNextPage,
        limit: 20,
      });

      addMessages(response.messages ?? []);

      changeMessagesPagination({
        hasMore: response.hasMore ?? false,
        nextCursor: response.nextCursor ?? null,
      });
    } finally {
      isLoadingMoreRef.current = false;
      setIsLoadingMore(false);
    }
  }, [
    activeContact?.id,
    addMessages,
    changeMessagesPagination,
    isLoadingMore,
    messagesNextPage,
  ]);

  // TODO: I must to get better the disabled chat logic
  return {
    disabledChat:
      !isConnected ||
      isError ||
      !isInRoom ||
      isLoading ||
      activeAgent?.id !== activeContact?.latestConversation?.agent?.id ||
      !activeContact?.latestConversation?.status ||
      CHAT_CONTACT_CONVERSATION_DISABLED.includes(
        activeContact?.latestConversation?.status,
      ),
    fetchNextMessages,
    isError,
    isLoading,
    isLoadingMore,
    messagesNextPage,
    sendMode,
  };
};
