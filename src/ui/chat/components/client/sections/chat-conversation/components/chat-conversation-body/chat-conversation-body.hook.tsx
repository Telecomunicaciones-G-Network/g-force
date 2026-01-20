'use client';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

import { useOnConversationAssignmentUpdated } from '@ui-chat/hooks/on_conversation_assignment_updated.hook';
import { useOnConversationCreated } from '@ui-chat/hooks/on_conversation_created.hook';
import { useOnIncommingMessage } from '@ui-chat/hooks/on-incomming-message.hook';
import { useOnOutgoingMessage } from '@ui-chat/hooks/on-outgoing-message.hook';

interface UseChatConversationBodyProps {
  disabledChat?: boolean;
}

export const useChatConversationBody = ({
  disabledChat = false,
}: Readonly<UseChatConversationBodyProps>) => {
  const messages = useChatStore((state) => state.messages);

  useOnConversationCreated();
  useOnConversationAssignmentUpdated();
  useOnIncommingMessage({
    disabledChat,
  });
  useOnOutgoingMessage();

  return {
    messages,
  };
};
