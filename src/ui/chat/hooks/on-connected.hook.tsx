'use client';

import type { OnConnectedResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { AgentStatus } from '@module-chat/domain/enums/agent-status.enum';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnConnectedMapper } from '@module-chat/infrastructure/mappers/on-connected.mapper';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * @name useOnConnected
 *
 * @description This hook listens to the on `connected` socket event:
 * Emitted to the agent that connects. Contains the authenticated agent's data, their teams, and assigned contacts.
 * - updates the active agent information in the contact store when a successful connection is established.
 * (agent id, name and teams)
 *
 * [Base event]
 *
 * @returns void
 *
 * TODO: I must to receive the agent status to set on setActiveAgent event
 */
export const useOnConnected = () => {
  const setActiveAgent = useContactStore((state) => state.setActiveAgent);

  onSocketEvent<OnConnectedResponseDTO>(
    socketEventsDictionary.CONNECTED,
    (data: OnConnectedResponseDTO) => {
      const parseResponse = JSON.parse(data as unknown as string);

      if (
        !parseResponse?.agent_id ||
        !parseResponse?.agent_full_name ||
        !parseResponse?.agent_teams ||
        !parseResponse?.success
      )
        // TODO: Set alert for error
        // TODO: Register error
        return;

      const response = OnConnectedMapper.mapFrom(parseResponse);

      if (!response?.success || !response?.agent?.id || !response?.agent?.name)
        // TODO: Set alert for error
        // TODO: Register error
        return;

      setActiveAgent({
        ...response?.agent,
        status: AgentStatus.OFFLINE,
      });
    },
  );
};
