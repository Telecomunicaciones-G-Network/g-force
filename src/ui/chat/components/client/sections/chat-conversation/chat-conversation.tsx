'use client';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatFileViewer } from '@ui-chat/components/client/blocks/chat-file-viewer';

import { ChatSendModes } from '@ui-chat/enums/chat-send-mode.enum';

import { ChatConversationBody } from './components/chat-conversation-body';
import { ChatConversationFooter } from './components/chat-conversation-footer';
import { ChatConversationHeader } from './components/chat-conversation-header';

import { useChatConversation } from './chat-conversation.hook';

import styles from './chat-conversation.module.css';

export const ChatConversation = () => {
  const {
    disabledChat,
    fetchNextMessages,
    isError,
    isLoading,
    isLoadingMore,
    messagesNextPage,
    sendMode,
  } = useChatConversation();

  return (
    <section className={cn(styles.base, 'divide-y divide-neutral-200')}>
      {sendMode === ChatSendModes.IMAGE && (
        <ChatFileViewer disabledChat={disabledChat} />
      )}
      <ChatConversationHeader />
      <div className={styles.base__content}>
        <ChatConversationBody
          disabledChat={disabledChat}
          fetchNextMessages={fetchNextMessages}
          isError={isError}
          isLoading={isLoading}
          isLoadingMore={isLoadingMore}
          messagesNextPage={messagesNextPage}
        />
        <ChatConversationFooter disabledChat={disabledChat} />
      </div>
    </section>
  );
};
