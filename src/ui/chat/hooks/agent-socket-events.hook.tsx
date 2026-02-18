'use client';

import { useOnAgentStatusChanged } from '@ui-chat/hooks/on-agent-status-changed.hook';
import { useOnConnected } from '@ui-chat/hooks/on-connected.hook';

/**
 * @name useAgentSocketEvents
 *
 * @description This hook listens and groups the agent socket events.
 */
export const useAgentSocketEvents = () => {
  useOnConnected();
  useOnAgentStatusChanged();
};
