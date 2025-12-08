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
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useEmitSendTextMessage = () => {
  const addMessage = useChatStore((state) => state.addMessage);
  const activeContact = useContactStore((state) => state.activeContact);

  const { emitWithAck, isConnectedAndStatusConnected } = useSocket();

  const updateOneMessageId = useChatStore((state) => state.updateOneMessageId);

  const emitSendTextMessage = useCallback(
    async ({
      data,
      onSuccess,
    }: Omit<EmitSendTextMessageRequest, 'latestConversationId'>) => {
      try {
        if (
          !activeContact?.latestConversation?.id ||
          !data?.trim() ||
          !emitWithAck ||
          !isConnectedAndStatusConnected ||
          !activeContact?.latestConversation?.agent?.id ||
          !activeContact?.latestConversation?.agent?.name
        )
          return;

        const temporalMessageId = uuidv4();
        const newMessage: MessageValues = {
          id: temporalMessageId,
          caption: null,
          contacts: [],
          conversationId: activeContact?.latestConversation?.id,
          createdAt: new Date().toISOString().replace('Z', '000Z'),
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
            isBot: false,
            name: activeContact?.latestConversation?.agent?.name,
          },
          sentAt: null,
          status: MessageStatus.PENDING,
          text: data?.trim(),
          type: MessageTypes.TEXT,
          updatedAt: null,
        };

        const request = EmitSendTextMessageMapper.mapTo({
          data,
          latestConversationId: activeContact?.latestConversation?.id,
        });

        addMessage({ ...newMessage });

        if (!request) return;

        const ack = await emitWithAck<
          EmitSendTextMessageRequestDTO,
          EmitSendTextMessageResponseDTO
        >(socketEmissionsDictionary.SEND_TEXT_MESSAGE, request);

        const parseAck = JSON.parse(ack as unknown as string);

        const response = EmitSendTextMessageMapper.mapFrom(parseAck);

        if (!response?.success || !response?.messageId) {
          return;
        }

        if (response?.messageId && newMessage) {
          updateOneMessageId(temporalMessageId, response?.messageId);

          const sounder = new Sounder('/sounds/whatsapp_emit_message.mp3');

          sounder.playAudio();
          onSuccess?.();
        }
      } catch (error) {
        console.error('error', error);

        return;
      }
    },
    [
      activeContact,
      addMessage,
      emitWithAck,
      isConnectedAndStatusConnected,
      updateOneMessageId,
    ],
  );

  return {
    emitSendTextMessage,
  };
};
