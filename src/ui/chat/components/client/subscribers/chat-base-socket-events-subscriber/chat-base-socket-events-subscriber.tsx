'use client';

import { useAgentSocketEvents } from '@ui-chat/hooks/agent-socket-events.hook';

/**
 * @name ChatBaseSocketEventsSubscriber
 *
 * @description This component subscribes to the base socket events.
 */
export const ChatBaseSocketEventsSubscriber = () => {
  useAgentSocketEvents();

  return null;
};
