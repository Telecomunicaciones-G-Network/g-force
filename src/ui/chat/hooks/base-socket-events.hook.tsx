'use client';

import { useOnAgentStatusChanged } from '@ui-chat/hooks/on-agent-status-changed.hook';
import { useOnConnected } from '@ui-chat/hooks/on-connected.hook';

/**
 * Use base socket events hook
 *
 * This hook listens and groups the base socket events.
 */
export const useBaseSocketEvents = () => {
  useOnConnected();
  useOnAgentStatusChanged();
};
