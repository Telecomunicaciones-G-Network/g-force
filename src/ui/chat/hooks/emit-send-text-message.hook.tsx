'use client';

import type { EmitSendTextMessageRequest } from '@module-chat/domain/interfaces';
import type {
  EmitSendTextMessageRequestDTO,
  EmitSendTextMessageResponseDTO,
} from '@module-chat/infrastructure/dtos';

import { useCallback } from 'react';

import { useSocket } from '@socketio/hooks/use-socket.hook';
import { Sounder } from '@sounder/classes/sounder.class';

import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';

import { EmitSendTextMessageMapper } from '@module-chat/infrastructure/mappers/emit-send-text-message.mapper';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

export const useEmitSendTextMessage = () => {
  const addMessage = useChatStore((state) => state.addMessage);

  const { emitWithAck, isConnectedAndStatusConnected } = useSocket();

  const emitSendTextMessage = useCallback(
    async (emission: EmitSendTextMessageRequest) => {
      try {
        if (
          !emitWithAck ||
          !isConnectedAndStatusConnected ||
          !emission?.conversationId ||
          !emission?.message?.text
        )
          return;

        const request = EmitSendTextMessageMapper.mapTo(emission);

        if (!request) return;

        const ack = await emitWithAck<
          EmitSendTextMessageRequestDTO,
          EmitSendTextMessageResponseDTO
        >(socketEmissionsDictionary.SEND_TEXT_MESSAGE, request);

        const parseAck = JSON.parse(ack as unknown as string);

        const response = EmitSendTextMessageMapper.mapFrom(parseAck);

        if (!response?.success) {
          return;
        }

        if (response?.messageId && emission?.message) {
          const sounder = new Sounder('/sounds/whatsapp_emit_message.mp3');

          addMessage({ ...emission?.message, id: response?.messageId });
          sounder.playAudio();
          emission?.onSuccess?.();
        }
      } catch (error) {
        console.error('error', error);
      }
    },
    [addMessage, emitWithAck, isConnectedAndStatusConnected],
  );

  return {
    emitSendTextMessage,
  };
};
