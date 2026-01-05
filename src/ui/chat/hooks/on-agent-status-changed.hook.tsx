'use client';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

/**
 * On agent status changed hook
 *
 * This hook listens to the on `agent_status_changed` socket event:
 * - Updates the agent status in the store when the agent status changes.
 * [Agent event]
 */
export const useOnAgentStatusChanged = () => {
  onSocketEvent<unknown>(
    socketEventsDictionary.AGENT_STATUS_CHANGED,
    (data: unknown) => {
      JSON.parse(data as unknown as string);
    },
  );
};
