'use client';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatConversationBody } from './components/chat-conversation-body';
import { ChatConversationFooter } from './components/chat-conversation-footer';
import { ChatConversationHeader } from './components/chat-conversation-header';

import { useChatConversation } from './chat-conversation.hook';

import styles from './chat-conversation.module.css';

export const ChatConversation = () => {
  const { isConnected, isError, isInRoom, isLoading } = useChatConversation();

  return (
    <section className={cn(styles.base, 'divide-y divide-neutral-200')}>
      <ChatConversationHeader />
      <div className={styles.base__content}>
        <ChatConversationBody isError={isError} isLoading={isLoading} />
        <ChatConversationFooter
          disabledChat={!isConnected || isError || !isInRoom || isLoading}
        />
      </div>
    </section>
  );
};
