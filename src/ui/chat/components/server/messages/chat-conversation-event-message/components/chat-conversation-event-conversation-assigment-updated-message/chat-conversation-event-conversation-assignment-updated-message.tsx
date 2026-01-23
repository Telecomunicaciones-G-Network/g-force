import type { ChatConversationEventConversationAssignmentUpdatedMessageProps } from './chat-conversation-event-conversation-assignment-updated-message.props';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Tag } from '@gnetwork-ui/components/molecules/tags/tag';

import { Tooltip } from '@gnetwork-ui/components/molecules/tooltips/tooltip';

import { teamTagColorDictionary } from '@ui-chat/dictionaries/team-tag-color.dictionary';

import styles from '../../chat-conversation-event-message.module.css';

export const ChatConversationEventConversationAssignmentUpdatedMessage = ({
  createdAt = '',
  eventData,
}: Readonly<ChatConversationEventConversationAssignmentUpdatedMessageProps>) => {
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
        {eventData?.assignedByAgent?.name} ha asignado la conversación a{' '}
        {/* Caso 1: Asignado a un Agente Persona */}
        {eventData?.agent?.name && (
          <>
            <Tooltip
              side="bottom"
              sideOffset={8}
              triggerAsChild
              triggerComponent={
                <span className="font-semibold text-neutral-700 cursor-pointer">
                  {eventData.agent.name}
                </span>
              }
            >
              <div className="text-xs text-neutral-100">
                {eventData?.team?.name || 'Sin equipo asignado'}
              </div>
            </Tooltip>
            {' '}
            <span className="text-neutral-400 text-xs whitespace-nowrap">
              {timeString}
            </span>
          </>
        )}
        {/* Caso 2: Asignado a un Equipo (Atención al Cliente) */}
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
