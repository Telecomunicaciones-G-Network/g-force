import type { ChatConversationEventConversationFinishedMessageProps } from './chat-conversation-event-conversation-finished-message.props';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Tag } from '@gnetwork-ui/components/molecules/tags/tag';

import { Tooltip } from '@gnetwork-ui/components/molecules/tooltips/tooltip';

import { teamTagColorDictionary } from '@ui-chat/dictionaries/team-tag-color.dictionary';

import styles from '../../chat-conversation-event-message.module.css';

export const ChatConversationEventConversationFinishedMessage = ({
  createdAt = '',
  eventData,
}: Readonly<ChatConversationEventConversationFinishedMessageProps>) => {
  const timeString = createdAt ? `(${isoToTime(createdAt)})` : '';

  return (
    <div
      className={`${styles.base} flex flex-col items-center justify-center w-full px-4 text-center`}
    >
      <Text
        align="center"
        as="label"
        className="text-[11.5px] text-neutral-500 leading-relaxed"
        level="xsmall"
        scheme="label"
      >
        Conversación finalizada por{' '}
        {/* Caso 1: Finalizada por un Agente específico */}
        {eventData?.agent?.name && eventData?.agent?.name}
        {/* Caso 2: Finalizada por un Equipo */}
        {eventData?.team?.id &&
          eventData?.team?.name &&
          !eventData?.agent?.name && (
            <span className="inline-flex items-center gap-1 align-middle ml-1">
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
