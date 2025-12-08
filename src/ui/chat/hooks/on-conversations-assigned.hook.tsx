'use client';

import type { OnConversationsAssignedResponseDTO } from '@module-chat/infrastructure/dtos';

import { useRouter } from 'next/navigation';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';
import { Sounder } from '@sounder/classes/sounder.class';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnConversationsAssignedMapper } from '@module-chat/infrastructure/mappers/on-conversations-assigned.mapper';

import { revalidateChatContactsAction } from '@ui-chat/actions/revalidate-chat-contacts.action';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useOnConversationsAssigned = () => {
  const router = useRouter();

  const existContactOnStore = useContactStore(
    (state) => state.existContactOnStore,
  );

  onSocketEvent<OnConversationsAssignedResponseDTO>(
    socketEventsDictionary.CONVERSATIONS_ASSIGNED,
    async (data) => {
      const parseResponse = JSON.parse(data as unknown as string);

      const response = OnConversationsAssignedMapper.mapFrom(parseResponse);

      if (!response?.contactIds || response?.contactIds?.length === 0) return;

      if (existContactOnStore(response?.contactIds?.[0])) return;

      const sounder = new Sounder('/sounds/on-conversations-assigned.mp3');

      sounder.playAudio();

      await revalidateChatContactsAction();

      router.refresh();
    },
  );
};
