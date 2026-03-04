'use client';

import type { OnChatMessageStatusChangedResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnChatMessageStatusChangedMapper } from '@module-chat/infrastructure/mappers/on-chat-message-status-changed.mapper';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

/**
 * @name useOnChatMessageStatusChanged
 *
 * @description This hook listens to the `MESSAGE_STATUS_CHANGED` socket event:
 * When the status of a message changes. Contains the ID of the message and the new status.
 * - Updates the status of the message in the chat store
 *
 * [Contact event]
 *
 * @returns void
 */
export const useOnChatMessageStatusChanged = () => {
  const { updateOneMessageStatusById } = useChatStore();

  onSocketEvent<OnChatMessageStatusChangedResponseDTO>(
    socketEventsDictionary.CHAT_MESSAGE_STATUS_CHANGED,
    (data) => {
      const parseResponse = JSON.parse(data as unknown as string);

      if (
        (!parseResponse?.message_id && !parseResponse?.id) ||
        !parseResponse?.status
      )
        // TODO: Set alert for error
        // TODO: Register error
        return;

      const response = OnChatMessageStatusChangedMapper.mapFrom(parseResponse);

      if (!response?.messageId || !response?.status)
        // TODO: Set alert for error
        // TODO: Register error
        return;

      updateOneMessageStatusById(response?.messageId, response?.status);
    },
  );
};
