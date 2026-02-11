'use client';

import { useBaseSocketEvents } from '@ui-chat/hooks/base-socket-events.hook';

/**
 * @name ChatBaseSocketEventsSubscriber
 *
 * @description This component subscribes to the base socket events.
 */
export const ChatBaseSocketEventsSubscriber = () => {
  useBaseSocketEvents();

  return null;
};
