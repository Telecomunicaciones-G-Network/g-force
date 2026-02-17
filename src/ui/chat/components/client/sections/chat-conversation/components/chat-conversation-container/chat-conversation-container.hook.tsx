'use client';

import { useLayoutEffect, useMemo, useRef } from 'react';

import { useScrollToBottom } from '@hook/use-scroll-to-bottom.hook';

import { useEmitMarkMessagesAsRead } from '@ui-chat/hooks/emit-mark-messages-as-read.hook';
import { useOnChatMediaStatusChanged } from '@ui-chat/hooks/on-chat-media-status-changed.hook';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatConversationContainer = () => {
  const activeContact = useContactStore((state) => state.activeContact);
  const previousScrollHeightRef = useRef<number>(0);
  const previousFirstMessageIdRef = useRef<string | null>(null);

  const messages = useChatStore((state) => state.messages);

  const previousLastMessageIdRef = useRef<string | null>(null);

  const shouldAutoScroll = useMemo(() => {
    const currentLastMessageId = messages[messages.length - 1]?.id;
    const previousLastMessageId = previousLastMessageIdRef.current;

    previousLastMessageIdRef.current = currentLastMessageId;

    if (!previousLastMessageId) return true;

    if (currentLastMessageId !== previousLastMessageId) return true;

    return false;
  }, [messages]);

  const { ref: messagesContainerRef, scrollToBottom } =
    useScrollToBottom<HTMLDivElement>({
      autoScroll: shouldAutoScroll,
      behavior: 'smooth',
      dependencies: [messages],
    });
  useOnChatMediaStatusChanged({
    onSucess: scrollToBottom,
  });

  const { emitMarkMessagesAsRead } = useEmitMarkMessagesAsRead();

  emitMarkMessagesAsRead(activeContact?.id);

  useLayoutEffect(() => {
    const container = messagesContainerRef.current;
    if (!container || !messages.length) return;

    const currentFirstMessageId = messages[0]?.id;
    const currentScrollHeight = container.scrollHeight;

    // detect if we loaded previous messages (old messages added at top)
    if (
      previousFirstMessageIdRef.current &&
      currentFirstMessageId !== previousFirstMessageIdRef.current &&
      currentScrollHeight > previousScrollHeightRef.current
    ) {
      const scrollDiff = currentScrollHeight - previousScrollHeightRef.current;

      // Adjust scroll to maintain visual position
      container.scrollTop += scrollDiff;
    }

    previousScrollHeightRef.current = currentScrollHeight;
    previousFirstMessageIdRef.current = currentFirstMessageId;
  }, [messages, messagesContainerRef]);

  return {
    messages,
    messagesContainerRef,
  };
};
