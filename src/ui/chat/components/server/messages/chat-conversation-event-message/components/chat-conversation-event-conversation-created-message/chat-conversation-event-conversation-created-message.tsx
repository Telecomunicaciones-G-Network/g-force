import type { ChatConversationEventConversationCreatedMessageProps } from './chat-conversation-event-conversation-created-message.props';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { isoToTime } from '@timer/utils/iso-to-time.util';

import { cn } from '@gnetwork-ui/utils/cn.util';

import styles from './chat-conversation-event-conversation-created-message.module.css';

export const ChatConversationEventConversationCreatedMessage = ({
  createdAt = '',
}: Readonly<ChatConversationEventConversationCreatedMessageProps>) => {
  const timeString = createdAt ? `(${isoToTime(createdAt)})` : '';
  return (
    <div className={cn(styles.base)}>
      <Text
        align="center"
        as="label"
        className="text-[11.5px] text-neutral-500 leading-relaxed"
        level="xsmall"
        scheme="label"
      >
        Se ha iniciado una conversación{' '}
        <span className="text-neutral-400 text-xs whitespace-nowrap">
          {timeString}
        </span>
      </Text>
    </div>
  );
};
