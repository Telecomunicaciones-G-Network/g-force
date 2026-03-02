'use client';

import { cn } from '@gnetwork-ui/utils/cn.util';

import {
  isDifferentDay,
  isoToDayLabel,
} from '@timer/utils/iso-to-day-label.util';

import { ChatConversationController } from '../chat-conversation-controller';
import { ChatDateSeparator } from '../chat-date-separator/chat-date-separator';

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
      {messages?.map((message, index) => {
        const prevMessage = messages[index - 1];
        const showSeparator =
          index === 0 ||
          (!!prevMessage?.createdAt &&
            isDifferentDay(prevMessage.createdAt, message.createdAt ?? ''));

        return (
          <div className="flex flex-col gap-6" key={message?.id}>
            {showSeparator && message?.createdAt && (
              <ChatDateSeparator label={isoToDayLabel(message.createdAt)} />
            )}
            <ChatConversationController message={message} />
          </div>
        );
      })}
    </div>
  );
};
