'use client';

import type { OnConnectedResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnConnectedMapper } from '@module-chat/infrastructure/mappers/on-connected.mapper';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * On connected hook
 *
 * This hook listens to the `connected` socket event and updates the active agent
 * information in the contact store when a successful connection is established.
 */
export const useOnConnected = () => {
  const setActiveAgent = useContactStore((state) => state.setActiveAgent);

  onSocketEvent<OnConnectedResponseDTO>(
    socketEventsDictionary.CONNECTED,
    (data) => {
      const parseResponse = JSON.parse(data as unknown as string);
      const response = OnConnectedMapper.mapFrom(parseResponse);

      if (!response?.success || !response?.agent?.id || !response?.agent?.name)
        return;

      setActiveAgent(response?.agent);
    },
  );
};
