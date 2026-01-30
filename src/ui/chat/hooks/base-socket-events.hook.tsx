'use client';

import { useOnAgentStatusChanged } from '@ui-chat/hooks/on-agent-status-changed.hook';
import { useOnConnected } from '@ui-chat/hooks/on-connected.hook';

/**
 * @name useBaseSocketEvents
 *
 * @description This hook listens and groups the base socket events.
 *
 * @returns void
 */
export const useBaseSocketEvents = () => {
  useOnConnected();
  useOnAgentStatusChanged();
};
