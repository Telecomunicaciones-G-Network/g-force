'use client';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

import { useContactSocketEvents } from '@ui-chat/hooks/contact-socket-events.hook';

interface UseChatConversationBodyProps {
  disabledChat?: boolean;
}

export const useChatConversationBody = ({
  disabledChat = false,
}: Readonly<UseChatConversationBodyProps>) => {
  const messages = useChatStore((state) => state.messages);

  useContactSocketEvents({
    disabledChat,
  });

  return {
    messages,
  };
};
