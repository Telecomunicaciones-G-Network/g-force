'use client';

import type { OnConversationsAssignedResponseDTO } from '@module-chat/infrastructure/dtos';

import { useRouter } from 'next/navigation';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnConversationsAssignedMapper } from '@module-chat/infrastructure/mappers/on-conversations-assigned.mapper';

import { revalidateChatContactsAction } from '@ui-chat/actions/revalidate-chat-contacts.action';

export const useOnConversationsAssigned = () => {
  const router = useRouter();

  onSocketEvent<OnConversationsAssignedResponseDTO>(
    socketEventsDictionary.CONVERSATIONS_ASSIGNED,
    async (data) => {
      const parseResponse = JSON.parse(data as unknown as string);

      const response = OnConversationsAssignedMapper.mapFrom(parseResponse);

      if (!response?.contactIds || response?.contactIds?.length === 0) return;

      await revalidateChatContactsAction();

      router.refresh();
    },
  );
};
