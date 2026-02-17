'use client';

import { useEffect, useMemo, useRef } from 'react';

import { useScrollToBottom } from '@hook/use-scroll-to-bottom.hook';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MessageStatus } from '@module-chat/domain/enums/message-status.enum';

import { useEmitMarkMessageAsRead } from '@ui-chat/hooks/emit-mark-message-as-read.hook';
import { useOnMediaStatusChanged } from '@ui-chat/hooks/on-media-status-changed.hook';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

export const useChatConversationContainer = () => {
  const lastProcessedMessageIdRef = useRef<string | null>(null);

  const messages = useChatStore((state) => state.messages);

  const { ref: messagesContainerRef, scrollToBottom } =
    useScrollToBottom<HTMLDivElement>({
      autoScroll: true,
      dependencies: [messages],
      behavior: 'smooth',
    });
  useOnMediaStatusChanged({
    onSucess: scrollToBottom,
  });

  const { emitMarkMessageAsRead } = useEmitMarkMessageAsRead();

  const lastMessage = useMemo(() => {
    const incomingMessages = messages?.filter(
      (message) => message?.direction === MessageDirections.INCOMING,
    );

    return incomingMessages?.[incomingMessages.length - 1];
  }, [messages]);

  useEffect(() => {
    if (
      !lastMessage ||
      lastMessage.status === MessageStatus.READ ||
      lastProcessedMessageIdRef.current === lastMessage?.id
    ) {
      // TODO: Register event
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
