'use client';

import type { OnMessageStatusChangedResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnMessageStatusChangedMapper } from '@module-chat/infrastructure/mappers/on-message-status-changed.mapper';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

/**
 * On message status changed hook
 *
 * This hook listens to the `MESSAGE_STATUS_CHANGED` socket event:
 * When the status of a message changes. Contains the ID of the message and the new status.
 * [Contact event]
 */
export const useOnMessageStatusChanged = () => {
  const { updateOneMessageStatusById } = useChatStore();

  onSocketEvent<OnMessageStatusChangedResponseDTO>(
    socketEventsDictionary.MESSAGE_STATUS_CHANGED,
    (data) => {
      const parseResponse = JSON.parse(data as unknown as string);

      if (!parseResponse?.message_id || !parseResponse?.status)
        // TODO: Set alert for error
        // TODO: Register error
        return;

      const response = OnMessageStatusChangedMapper.mapFrom(parseResponse);

      if (!response?.messageId || !response?.status)
        // TODO: Set alert for error
        // TODO: Register error
        return;

      updateOneMessageStatusById(response?.messageId, response?.status);
    },
  );
};
