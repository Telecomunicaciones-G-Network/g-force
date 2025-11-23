'use client';

import { useEffect, useMemo, useRef } from 'react';

import { useScrollToBottom } from '@hookers/use-scroll-to-bottom.hook';

import { MessageStatus } from '@module-chat/domain/enums/message-status.enum';

import { useMarkMessageAsRead } from '@ui-chat/hooks/useMarkMessageAsRead.hook';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

export const useChatConversationContainer = () => {
  const lastProcessedMessageIdRef = useRef<string | null>(null);

  const messages = useChatStore((state) => state.messages);

  const { markMessageAsRead } = useMarkMessageAsRead();
  const { ref: messagesContainerRef } = useScrollToBottom<HTMLDivElement>({
    autoScroll: true,
    dependencies: [messages],
    behavior: 'smooth',
  });

  const lastMessage = useMemo(
    () => messages?.[messages.length - 1],
    [messages],
  );

  useEffect(() => {
    if (
      !lastMessage ||
      lastMessage.status === MessageStatus.READ ||
      lastProcessedMessageIdRef.current === lastMessage?.id
    ) {
      return;
    }

    lastProcessedMessageIdRef.current = lastMessage?.id;
    markMessageAsRead(lastMessage?.id);
  }, [lastMessage, markMessageAsRead]);

  return {
    messages,
    messagesContainerRef,
  };
};
