'use client';

import type { OnConnectedResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnConnectedMapper } from '@module-chat/infrastructure/mappers/on-connected.mapper';

import { useAuth } from '@ui-auth/hooks/auth.hook';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useOnConnected = () => {
  const { user } = useAuth();

  const setActiveAgent = useContactStore((state) => state.setActiveAgent);

  onSocketEvent<OnConnectedResponseDTO>(
    socketEventsDictionary.CONNECTED,
    (data) => {
      const parseResponse = JSON.parse(data as unknown as string);

      const userData = JSON.parse(user as string);

      const response = OnConnectedMapper.mapFrom(parseResponse);

      if (!response?.success || !response?.agentId || !userData) return;

      setActiveAgent({
        id: response?.agentId,
        name: `${userData?.firstname ? userData?.firstname : ''} ${userData?.lastname ? userData?.lastname : ''}`,
      });
    },
  );
};
