'use client';

import { useEffect, useMemo, useRef } from 'react';

import { useScrollToBottom } from '@hook/use-scroll-to-bottom.hook';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MessageStatus } from '@module-chat/domain/enums/message-status.enum';

import { useEmitMarkMessageAsRead } from '@ui-chat/hooks/emit-mark-message-as-read.hook';
import { useOnMediaStatusChanged } from '@ui-chat/hooks/on-media-status-changed.hook';
import { useOnMessageStatusChanged } from '@ui-chat/hooks/on-message-status-changed.hook';

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
  useOnMessageStatusChanged();
  useOnMediaStatusChanged({
    onSucess: scrollToBottom,
  });

  const { emitMarkMessageAsRead } = useEmitMarkMessageAsRead();

  const lastMessage = useMemo(
    () => messages?.[messages.length - 1],
    [messages],
  );

  useEffect(() => {
    if (
      !lastMessage ||
      lastMessage.status === MessageStatus.READ ||
      lastMessage.direction === MessageDirections.OUTGOING ||
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
