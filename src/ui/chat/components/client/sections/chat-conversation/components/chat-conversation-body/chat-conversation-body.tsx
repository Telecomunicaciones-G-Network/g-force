'use client';

import type { ChatConversationBodyProps } from './chat-conversation-body.props';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatConversationBodySkeleton } from './chat-conversation-body-skeleton';
import { ChatConversationController } from '../chat-conversation-controller';

import { useChatConversationBody } from './chat-conversation-body.hook';

import styles from './chat-conversation-body.module.css';

export const ChatConversationBody = ({
  disabledChat = false,
  isError = false,
  isLoading = false,
}: Readonly<ChatConversationBodyProps>) => {
  const { messages, messagesContainerRef } = useChatConversationBody({
    disabledChat,
  });

  return (
    <>
      {isLoading && <ChatConversationBodySkeleton />}
      {isError && <div>error</div>}
      {!isLoading && !isError && messages?.length > 0 && (
        <div
          ref={messagesContainerRef}
          className={cn(
            styles.base,
            'gap-6 px-4 py-6 tablet:gap-8 tablet:px-8 lg:gap-6 lg:p-6',
          )}
        >
          {messages?.map((message) => (
            <ChatConversationController key={message?.id} message={message} />
          ))}
        </div>
      )}
    </>
  );
};
