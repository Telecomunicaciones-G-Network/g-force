'use client';

// import { useEffect, useMemo, useRef } from 'react';

import { useScrollToBottom } from '@hook/use-scroll-to-bottom.hook';

// import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
// import { MessageStatus } from '@module-chat/domain/enums/message-status.enum';

import { useEmitMarkMessagesAsRead } from '@ui-chat/hooks/emit-mark-messages-as-read.hook';
import { useOnChatMediaStatusChanged } from '@ui-chat/hooks/on-chat-media-status-changed.hook';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatConversationContainer = () => {
  const activeContact = useContactStore((state) => state.activeContact);
  // const lastProcessedMessageIdRef = useRef<string | null>(null);

  const messages = useChatStore((state) => state.messages);

  const { ref: messagesContainerRef, scrollToBottom } =
    useScrollToBottom<HTMLDivElement>({
      autoScroll: true,
      dependencies: [messages],
      behavior: 'smooth',
    });
  useOnChatMediaStatusChanged({
    onSucess: scrollToBottom,
  });

  const { emitMarkMessagesAsRead } = useEmitMarkMessagesAsRead();

  /* const lastMessage = useMemo(() => {
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
    // emitMarkMessagesAsRead(lastMessage?.id);
  }, [lastMessage, emitMarkMessagesAsRead]); */

  emitMarkMessagesAsRead(activeContact?.id);

  return {
    messages,
    messagesContainerRef,
  };
};
