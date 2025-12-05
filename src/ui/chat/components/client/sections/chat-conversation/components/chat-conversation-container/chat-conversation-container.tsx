'use client';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatConversationController } from '../chat-conversation-controller';

import { useChatConversationContainer } from './chat-conversation-container.hook';

import styles from './chat-conversation-container.module.css';

export const ChatConversationContainer = () => {
  const { messagesContainerRef, messages } = useChatConversationContainer();

  return (
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
  );
};
