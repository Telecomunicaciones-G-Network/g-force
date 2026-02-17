'use client';

import { useOnContactConversationAssignmentUpdated } from '@ui-chat/hooks/on-contact-conversation-assignment-updated.hook';
import { useOnContactFinished } from '@ui-chat/hooks/on-contact-finished.hook';
import { useOnNewMessageReceived } from '@ui-chat/hooks/on-new-message-received.hook';
import { useOnNewMessageSent } from '@ui-chat/hooks/on-new-message-sent.hook';

/**
 * @name useAgentSocketEvents
 *
 * @description This hook listens and groups the agent socket events.
 *
 * TODO: Rename as socket common contact socker events
 */
export const useAgentSocketEvents = () => {
  useOnContactConversationAssignmentUpdated();
  useOnContactFinished(); // contact_conversation_finished si esta el status ALL o el status FINISHED lo deje en el store sino que lo borre del store
  useOnNewMessageReceived(); // contact_message_received only rename
  useOnNewMessageSent(); // contact_message_sent only rename
};
