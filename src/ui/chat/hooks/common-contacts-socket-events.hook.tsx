'use client';

import { useOnContactConversationAssignmentUpdated } from '@ui-chat/hooks/on-contact-conversation-assignment-updated.hook';
import { useOnContactConversationCreated } from '@ui-chat/hooks/on-contact-conversation-created.hook';
import { useOnContactConversationFinished } from '@ui-chat/hooks/on-contact-conversation-finished.hook';
import { useOnContactMessageReceived } from '@ui-chat/hooks/on-contact-message-received.hook';
import { useOnContactMessageSent } from '@ui-chat/hooks/on-contact-message-sent.hook';

/**
 * @name useCommonContactsSocketEvents
 *
 * @description This hook listens and groups the agent socket events.
 *
 * TODO: Rename as socket common contact socker events
 */
export const useCommonContactsSocketEvents = () => {
  useOnContactConversationAssignmentUpdated();
  useOnContactConversationCreated();
  useOnContactConversationFinished();
  useOnContactMessageReceived();
  useOnContactMessageSent();
};
