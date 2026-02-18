'use client';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatConversationController } from '../chat-conversation-controller';

import type { ChatConversationContainerProps } from './chat-conversation-container.props';

import styles from './chat-conversation-container.module.css';

export const ChatConversationContainer = ({
  messages,
}: Readonly<ChatConversationContainerProps>) => {
  return (
    <div
      className={cn(
        styles.base,
        'gap-6 px-4 py-6 tablet:gap-8 tablet:px-8 lg:gap-6 lg:p-6',
      )}
    >
      {messages?.map((message) => (
        <ChatConversationController key={message?.id} message={message} />
      ))}
    </div>
  );
};
