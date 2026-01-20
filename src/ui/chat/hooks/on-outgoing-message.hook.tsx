'use client';

import type { OnOutgoingMessageResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnOutgoingMessageMapper } from '@module-chat/infrastructure/mappers/on-outgoing-message.mapper';

/**
 * On outgoing message hook
 *
 * This hook listens to the on `outgoing_message` socket event:
 * When an agent sends a new message in a contact's chat. This includes both regular messages sent to the contact,
 * as well as internal messages and event messages. Contains all message data to be displayed in the open chat panel.
 * Emitted to the agent when a message is sent. Contains the message data.
 */
export const useOnOutgoingMessage = () => {
  onSocketEvent<OnOutgoingMessageResponseDTO>(
    socketEventsDictionary.OUTGOING_MESSAGE,
    (data: OnOutgoingMessageResponseDTO) => {
      const parseResponse = JSON.parse(data as unknown as string);

      if (
        !parseResponse?.message_id ||
        !parseResponse?.contact_id ||
        !parseResponse?.conversation_id ||
        !parseResponse?.status ||
        !parseResponse?.type
      )
        // TODO: Show alert for error
        // TODO: Register error
        return;

      const response = OnOutgoingMessageMapper.mapFrom(parseResponse);

      if (
        !response?.id ||
        !response?.conversationId ||
        !response?.status ||
        !response?.type
      )
        // TODO: Show alert for error
        // TODO: Register error
        return;

      // Debo manejar la logica de este socket event aqui
      console.log(response);
    },
  );
};
