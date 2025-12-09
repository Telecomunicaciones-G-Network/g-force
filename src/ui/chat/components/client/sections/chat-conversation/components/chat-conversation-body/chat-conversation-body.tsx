'use client';

import type { ChatConversationBodyProps } from './chat-conversation-body.props';

import { ChatConversationBodySkeleton } from './chat-conversation-body-skeleton';
import { ChatConversationContainer } from '../chat-conversation-container';

import { useChatConversationBody } from './chat-conversation-body.hook';

export const ChatConversationBody = ({
  disabledChat = false,
  isError = false,
  isLoading = false,
}: Readonly<ChatConversationBodyProps>) => {
  const { messages } = useChatConversationBody({
    disabledChat,
  });

  console.log(messages);

  return (
    <>
      {isLoading && <ChatConversationBodySkeleton />}
      {isError && <div>error</div>}
      {!isLoading && !isError && messages?.length > 0 && (
        <ChatConversationContainer />
      )}
    </>
  );
};
