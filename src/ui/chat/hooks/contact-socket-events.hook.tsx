'use client';

import { useOnConversationAssignmentUpdated } from '@ui-chat/hooks/on-conversation-assignment-updated.hook';
import { useOnConversationCreated } from '@ui-chat/hooks/on-conversation-created.hook';
import { useOnConversationFinished } from '@ui-chat/hooks/on-conversation-finished.hook';
import { useOnIncommingMessage } from '@ui-chat/hooks/on-incomming-message.hook';
import { useOnMessageStatusChanged } from '@ui-chat/hooks/on-message-status-changed.hook';
import { useOnOutgoingMessage } from '@ui-chat/hooks/on-outgoing-message.hook';
import { useOnReactionAdded } from '@ui-chat/hooks/on-reaction-added.hook';
import { useOnReactionRemoved } from '@ui-chat/hooks/on-reaction-removed.hook';

/**
 * @name UseContactSocketEventsProps
 *
 * @description This hook listens to the contact socket events.
 *
 * @param {boolean} [disabledChat] - If true, the chat will be disabled.
 */
interface UseContactSocketEventsProps {
  disabledChat?: boolean;
}

/**
 * @name useContactSocketEvents
 *
 * @description This hook listens and groups the contact socket events.
 *
 * @param {boolean} [disabledChat] - If true, the chat will be disabled.
 *
 * @returns void
 */
export const useContactSocketEvents = ({
  disabledChat = false,
}: Readonly<UseContactSocketEventsProps>) => {
  // TODO: Find out the way to handle disabled chat without passing by props
  useOnConversationCreated();
  useOnConversationAssignmentUpdated();
  useOnConversationFinished();
  useOnIncommingMessage({
    disabledChat,
  });
  useOnMessageStatusChanged();
  useOnOutgoingMessage();
  useOnReactionAdded();
  useOnReactionRemoved();
};
