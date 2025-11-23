'use client';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

import { useOnIncommingMessage } from '@ui-chat/hooks/on-incomming-message.hook';

interface UseChatConversationBodyProps {
  disabledChat?: boolean;
}

export const useChatConversationBody = ({
  disabledChat = false,
}: Readonly<UseChatConversationBodyProps>) => {
  const messages = useChatStore((state) => state.messages);

  useOnIncommingMessage({
    disabledChat,
  });

  return {
    messages,
  };
};
