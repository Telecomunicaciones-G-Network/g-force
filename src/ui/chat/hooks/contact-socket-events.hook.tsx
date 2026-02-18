'use client';

import { useOnChatConversationAssignmentUpdated } from '@ui-chat/hooks/on-chat-conversation-assignment-updated.hook';
import { useOnChatConversationCreated } from '@ui-chat/hooks/on-chat-conversation-created.hook';
import { useOnChatConversationFinished } from '@ui-chat/hooks/on-chat-conversation-finished.hook';
import { useOnChatMessageReactionAdded } from '@ui-chat/hooks/on-chat-message-reaction-added.hook';
import { useOnChatMessageReactionRemoved } from '@ui-chat/hooks/on-chat-message-reaction-removed.hook';
import { useOnChatMessageReceived } from '@ui-chat/hooks/on-chat-message-received.hook';
import { useOnChatMessageSent } from '@ui-chat/hooks/on-chat-message-sent.hook';
import { useOnChatMessageStatusChanged } from '@ui-chat/hooks/on-chat-message-status-changed.hook';

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
 *
 * TODO: Find out the way to handle disabled chat without passing by props
 */
export const useContactSocketEvents = ({
  disabledChat = false,
}: Readonly<UseContactSocketEventsProps>) => {
  useOnChatConversationAssignmentUpdated();
  useOnChatConversationCreated();
  useOnChatConversationFinished();
  useOnChatMessageReactionAdded();
  useOnChatMessageReactionRemoved();
  useOnChatMessageReceived({ disabledChat });
  useOnChatMessageSent();
  useOnChatMessageStatusChanged();
};
