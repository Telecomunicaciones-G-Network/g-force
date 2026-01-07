import type { ChatConversationEventConversationAssignmentUpdatedMessageProps } from './chat-conversation-event-conversation-assignment-updated-message.props';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Tag } from '@gnetwork-ui/components/molecules/tags/tag';

import { teamTagColorDictionary } from '@ui-chat/dictionaries/team-tag-color.dictionary';

import styles from '../../chat-conversation-event-message.module.css';

export const ChatConversationEventConversationAssignmentUpdatedMessage = ({
  createdAt = '',
  eventData,
}: Readonly<ChatConversationEventConversationAssignmentUpdatedMessageProps>) => {
  return (
    <div className={styles.base}>
      <Text
        align="center"
        as="label"
        className="text-[11.5px] text-neutral-500"
        level="xsmall"
        scheme="label"
      >
        {eventData?.assignedByAgent?.name} ha asignado la conversación a{' '}
        {eventData?.agent?.name}{' '}
        {createdAt && eventData?.agent?.name && (
          <span className="text-neutral-400 text-xs">
            ({isoToTime(createdAt ?? '')})
          </span>
        )}
      </Text>
      {eventData?.team?.id &&
        eventData?.team?.name &&
        !eventData?.agent?.name && (
          <div className="flex items-center gap-[2px]">
            <Tag
              className="min-h-5 px-2 text-xs"
              color={teamTagColorDictionary?.[eventData?.team?.id]}
            >
              {eventData?.team?.name}
            </Tag>
            {createdAt && (
              <span className="text-neutral-400 text-xs">
                ({isoToTime(createdAt ?? '')})
              </span>
            )}
          </div>
        )}
    </div>
  );
};
