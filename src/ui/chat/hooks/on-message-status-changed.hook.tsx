'use client';

import type { OnMessageStatusChangedResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnMessageStatusChangedMapper } from '@module-chat/infrastructure/mappers/on-message-status-changed.mapper';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

export const useOnMessageStatusChanged = () => {
  const { updateOneMessageStatusById } = useChatStore();

  onSocketEvent<OnMessageStatusChangedResponseDTO>(
    socketEventsDictionary.MESSAGE_STATUS_CHANGED,
    (data) => {
      const parseResponse = JSON.parse(data as unknown as string);
      const response = OnMessageStatusChangedMapper.mapFrom(parseResponse);

      console.log('response', response);

      if (!response?.messageId || !response?.status) {
        return;
      }

      updateOneMessageStatusById(response?.messageId, response?.status);
    },
  );
};
