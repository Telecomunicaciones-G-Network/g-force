'use client';

import type {
  EmitSendTextMessageRequest,
  MessageValues,
} from '@module-chat/domain/interfaces';
import type {
  EmitSendTextMessageRequestDTO,
  EmitSendTextMessageResponseDTO,
} from '@module-chat/infrastructure/dtos';

import { useCallback } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { useSocket } from '@socketio/hooks/use-socket.hook';
import { Sounder } from '@sounder/classes/sounder.class';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MessageStatus } from '@module-chat/domain/enums/message-status.enum';
import { MessageTypes } from '@module-chat/domain/enums/message-types.enum';

import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';

import { EmitSendTextMessageMapper } from '@module-chat/infrastructure/mappers/emit-send-text-message.mapper';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

export const useEmitSendTextMessage = () => {
  const addMessage = useChatStore((state) => state.addMessage);

  const { emitWithAck, isConnectedAndStatusConnected } = useSocket();

  const emitSendTextMessage = useCallback(
    async ({ activeContact, data, onSuccess }: EmitSendTextMessageRequest) => {
      try {
        if (
          !emitWithAck ||
          !isConnectedAndStatusConnected ||
          !activeContact?.latestConversation?.id ||
          !data?.text?.trim()
        )
          return;

        const newMessage: MessageValues = {
          id: uuidv4(),
          caption: null,
          contacts: [],
          conversationId: activeContact?.latestConversation?.id,
          createdAt: new Date().toISOString(),
          deliveredAt: null,
          direction: MessageDirections.OUTGOING,
          failedAt: null,
          forwarded: false,
          forwardedManyTimes: false,
          location: null,
          media: null,
          reactions: [],
          readAt: null,
          sender: {
            id: activeContact?.latestConversation?.agent?.id,
            name: activeContact?.latestConversation?.agent?.name,
          },
          sentAt: null,
          status: MessageStatus.PENDING,
          text: data?.text?.trim(),
          type: MessageTypes.TEXT,
          updatedAt: null,
        };

        const request = EmitSendTextMessageMapper.mapTo({
          activeContact,
          data,
          onSuccess,
        });

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

        if (response?.messageId && newMessage) {
          const sounder = new Sounder('/sounds/whatsapp_emit_message.mp3');

          addMessage({ ...newMessage, id: response?.messageId });
          sounder.playAudio();
          onSuccess?.();
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
