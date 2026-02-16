import type { ChatConversationEventConversationFinishedMessageProps } from './chat-conversation-event-conversation-finished-message.props';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Tag } from '@gnetwork-ui/components/molecules/tags/tag';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { teamTagColorDictionary } from '@ui-chat/dictionaries/team-tag-color.dictionary';

import styles from '../../chat-conversation-event-message.module.css';
import localStyles from './chat-conversation-event-conversation-finished-message.module.css';

/**
 * @name ChatConversationEventConversationFinishedMessage
 *
 * @description This component is used to render a chat conversation event conversation finished message.
 *
 * @param {string} createdAt - The creation date of the message.
 * @param {MessageEventData | null} eventData - The event data of the message.
 */
export const ChatConversationEventConversationFinishedMessage = ({
  createdAt = '',
  eventData,
}: Readonly<ChatConversationEventConversationFinishedMessageProps>) => {
  const timeString = createdAt ? `(${isoToTime(createdAt)})` : '';

  return (
    <div className={cn(styles.base, localStyles.base)}>
      <Text
        align="center"
        as="label"
        className="text-[11.5px] text-neutral-500 leading-relaxed"
        level="xsmall"
        scheme="label"
      >
        Conversación finalizada por{' '}
        {eventData?.agent?.name && eventData?.agent?.name}
        {eventData?.team?.id &&
          eventData?.team?.name &&
          !eventData?.agent?.name && (
            <span className="ml-1 inline-flex items-center gap-1 align-middle">
              <Tag
                className="min-h-5 px-2 text-xs"
                color={teamTagColorDictionary?.[eventData?.team?.id]}
              >
                {eventData?.team?.name}
              </Tag>
              <span className="text-neutral-400 text-xs whitespace-nowrap">
                {timeString}
              </span>
            </span>
          )}
      </Text>
    </div>
  );
};
