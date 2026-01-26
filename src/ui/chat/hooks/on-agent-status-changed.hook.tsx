'use client';

import type { AgentStatus } from '@module-chat/domain/enums/agent-status.enum';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { useAgentStatusStore } from '@ui-chat/stores/agent-status-store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

interface AgentStatusChangedResponse {
  status: AgentStatus;
}

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
  const clearPendingStatus = useAgentStatusStore(
    (state) => state.clearPendingStatus,
  );

  onSocketEvent<AgentStatusChangedResponse>(
    socketEventsDictionary.AGENT_STATUS_CHANGED,
    (data: AgentStatusChangedResponse) => {
      const parseResponse = JSON.parse(data as unknown as string);

      if (parseResponse?.status) {
        updateActiveAgentStatus(parseResponse.status);
        clearPendingStatus();
      }
    },
  );
};
