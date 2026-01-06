import type { ChatConversationEventMessageProps } from '../../chat-conversation-event-message.props';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Tag } from '@gnetwork-ui/components/molecules/tags/tag';

import { teamTagColorDictionary } from '@ui-chat/dictionaries/team-tag-color.dictionary';

import styles from '../../chat-conversation-event-message.module.css';

export const ChatConversationEventConversationAssigmentUpdatedMessage = ({
  eventData,
}: Readonly<ChatConversationEventMessageProps>) => {
  return (
    <div className={styles.base}>
      <Text
        align="center"
        as="label"
        className="text-neutral-500 text-xs"
        level="xsmall"
        scheme="label"
      >
        {eventData?.assignedByAgent?.name} ha asignado la conversación a{' '}
        {eventData?.agent?.name}
      </Text>
      {eventData?.team?.id &&
        eventData?.team?.name &&
        !eventData?.agent?.name && (
          <Tag
            className="min-h-5 px-2 text-xs"
            color={teamTagColorDictionary?.[eventData?.team?.id]}
          >
            {eventData?.team?.name}
          </Tag>
        )}
    </div>
  );
};
