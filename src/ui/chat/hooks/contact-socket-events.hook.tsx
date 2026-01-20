'use client';

import { useOnConversationAssignmentUpdated } from '@ui-chat/hooks/on_conversation_assignment_updated.hook';
import { useOnConversationCreated } from '@ui-chat/hooks/on_conversation_created.hook';
import { useOnIncommingMessage } from '@ui-chat/hooks/on-incomming-message.hook';
import { useOnMessageStatusChanged } from '@ui-chat/hooks/on-message-status-changed.hook';
import { useOnOutgoingMessage } from '@ui-chat/hooks/on-outgoing-message.hook';
import { useOnReactionAdded } from '@ui-chat/hooks/on-reaction-added.hook';
import { useOnReactionRemoved } from '@ui-chat/hooks/on-reaction-removed.hook';

/**
 * Use contact socket events hook
 *
 * This hook listens to the contact socket events.
 *
 * @param disabledChat - If true, the chat will be disabled.
 */
interface UseContactSocketEventsProps {
  disabledChat?: boolean;
}

/**
 * Use contact socket events hook
 *
 * This hook listens and groups the contact socket events.
 *
 * @param disabledChat - If true, the chat will be disabled.
 */
export const useContactSocketEvents = ({
  disabledChat = false,
}: Readonly<UseContactSocketEventsProps>) => {
  // TODO: Find out the way to handle disabled chat without passing by props
  useOnConversationCreated();
  useOnConversationAssignmentUpdated();
  useOnIncommingMessage({
    disabledChat,
  });
  useOnMessageStatusChanged();
  useOnOutgoingMessage();
  useOnReactionAdded();
  useOnReactionRemoved();
};
