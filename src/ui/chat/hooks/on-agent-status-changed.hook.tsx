'use client';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

/**
 * On agent status changed hook
 *
 * This hook listens to the on `agent_status_changed` socket event:
 * When the agent changes status from any session. Emitted only to the agent that changed status to update its status indicator. Contains only the new status.
 * [Agent event]
 */
export const useOnAgentStatusChanged = () => {
  // TODO: Type the event
  onSocketEvent<unknown>(
    socketEventsDictionary.AGENT_STATUS_CHANGED,
    // TODO: Type the data
    (data: unknown) => {
      const parseResponse = JSON.parse(data as unknown as string);

      console.log(parseResponse);

      // TODO: Implement the logic to update the agent status
    },
  );
};
