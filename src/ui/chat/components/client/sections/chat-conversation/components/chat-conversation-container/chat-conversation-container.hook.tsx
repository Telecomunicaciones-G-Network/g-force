'use client';

import { useEffect, useMemo, useRef } from 'react';

import { useScrollToBottom } from '@hookers/use-scroll-to-bottom.hook';

import { MessageStatus } from '@module-chat/domain/enums/message-status.enum';

import { useEmitMarkMessageAsRead } from '@ui-chat/hooks/useEmitMarkMessageAsRead.hook';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

export const useChatConversationContainer = () => {
  const lastProcessedMessageIdRef = useRef<string | null>(null);

  const messages = useChatStore((state) => state.messages);

  const { emitMarkMessageAsRead } = useEmitMarkMessageAsRead();
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
    emitMarkMessageAsRead(lastMessage?.id);
  }, [lastMessage, emitMarkMessageAsRead]);

  return {
    messages,
    messagesContainerRef,
  };
};
