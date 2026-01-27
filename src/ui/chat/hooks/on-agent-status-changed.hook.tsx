'use client';

import type { OnAgentStatusChangedResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * On agent status changed hook
 *
 * This hook listens to the on `agent_status_changed` socket event:
 * When the agent changes status from any session. Emitted only to the agent that changed status to update its status indicator.
 * Contains only the new status.
 * [Base event]
 */
export const useOnAgentStatusChanged = () => {
  const updateActiveAgentStatus = useContactStore(
    (state) => state.updateActiveAgentStatus,
  );

  onSocketEvent<OnAgentStatusChangedResponseDTO>(
    socketEventsDictionary.AGENT_STATUS_CHANGED,
    (data: OnAgentStatusChangedResponseDTO) => {
      const parseResponse = JSON.parse(data as unknown as string);

      if (!parseResponse?.status)
        // TODO: Set alert for error
        // TODO: Register error
        return;

      updateActiveAgentStatus(parseResponse.status);
    },
  );
};
