'use client';

import type { ChatConversationBodyProps } from './chat-conversation-body.props';

import { InfinityScrollContainer } from '@gnetwork-ui/components/organisms/containers/infinity-scroll-container';

import { ChatConversationBodySkeleton } from './chat-conversation-body-skeleton';
import { ChatConversationContainer } from '../chat-conversation-container';

import { useChatConversationContainer } from '../chat-conversation-container/chat-conversation-container.hook';
import { useChatConversationBody } from './chat-conversation-body.hook';

export const ChatConversationBody = ({
  disabledChat = false,
  fetchNextMessages,
  isError = false,
  isLoading = false,
  isLoadingMore = false,
  messagesNextPage = null,
}: Readonly<ChatConversationBodyProps>) => {
  useChatConversationBody({
    disabledChat,
  });

  const { messages, messagesContainerRef } = useChatConversationContainer();

  return (
    <>
      {isLoading && <ChatConversationBodySkeleton />}
      {isError && <div>error</div>}
      {!isLoading && !isError && messages?.length > 0 && (
        <InfinityScrollContainer
          ref={messagesContainerRef}
          direction="top"
          isLoading={isLoadingMore}
          nextPage={messagesNextPage}
          onLoadMore={fetchNextMessages}
        >
          <ChatConversationContainer messages={messages} />
        </InfinityScrollContainer>
      )}
    </>
  );
};
