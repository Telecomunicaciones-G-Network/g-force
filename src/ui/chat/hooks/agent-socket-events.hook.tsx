'use client';

import { useOnContactAssignmentUpdated } from '@ui-chat/hooks/on-contact-assignment-updated.hook';
import { useOnContactFinished } from '@ui-chat/hooks/on-contact-finished.hook';
import { useOnNewMessageReceived } from '@ui-chat/hooks/on-new-message-received.hook';
import { useOnNewMessageSent } from '@ui-chat/hooks/on-new-message-sent.hook';

/**
 * @name useAgentSocketEvents
 *
 * @description This hook listens and groups the agent socket events.
 *
 * @returns void
 */
export const useAgentSocketEvents = () => {
  useOnContactAssignmentUpdated();
  useOnContactFinished();
  useOnNewMessageReceived();
  useOnNewMessageSent();
};
