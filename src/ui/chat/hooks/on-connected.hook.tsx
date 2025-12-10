'use client';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { useAuth } from '@ui-auth/hooks/auth.hook';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

interface OnConnectedResponseDTO {
  agent_id: string;
  contact_ids: string[];
  success: boolean;
  user_id: string;
}

export const useOnConnected = () => {
  const { user } = useAuth();

  const setActiveAgent = useContactStore((state) => state.setActiveAgent);

  onSocketEvent<OnConnectedResponseDTO>(
    socketEventsDictionary.CONNECTED,
    (data) => {
      const parseResponse = JSON.parse(data as unknown as string);

      const userData = JSON.parse(user as string);

      if (!parseResponse?.success || !parseResponse?.agent_id || !userData)
        return;

      setActiveAgent({
        id: parseResponse?.agent_id,
        name: `${userData?.firstname ? userData?.firstname : ''} ${userData?.lastname ? userData?.lastname : ''}`,
      });
    },
  );
};
