'use client';

import type { ChatConversationBodyProps } from './chat-conversation-body.props';

import { Fragment } from 'react';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { ChatMessage } from '@gnetwork-ui/components/organisms/blocks/chat-message';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatConversationBodySkeleton } from './chat-conversation-body-skeleton';

import { useChatConversationBody } from './chat-conversation-body.hook';

import styles from './chat-conversation-body.module.css';

export const ChatConversationBody = ({
  isError = false,
  isLoading = false,
}: Readonly<ChatConversationBodyProps>) => {
  const { messages, messagesContainerRef } = useChatConversationBody();

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
            <Fragment key={message?.id}>
              {message?.id && (
                <ChatMessage
                  direction={
                    message?.direction === 'INCOMING' ? 'incoming' : 'outgoing'
                  }
                  time={isoToTime(message?.createdAt ?? '')}
                  username={message?.sender?.name}
                >
                  {message?.text}
                </ChatMessage>
              )}
            </Fragment>
          ))}
        </div>
      )}
    </>
  );
};
