'use client';

import type {
  EmitSendTextMessageRequest,
  Message,
} from '@module-chat/domain/interfaces';
import type {
  EmitSendTextMessageRequestDTO,
  EmitSendTextMessageResponseDTO,
} from '@module-chat/infrastructure/dtos';

import { useCallback } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Sounder } from '@sounder/classes/sounder.class';

import { AlertSchemes as ToastSchemes } from '@gnetwork-ui/components/molecules/alerts/alert/enums/alert-scheme.enum';

import { useToast } from '@gnetwork-ui/components/organisms/toasts/toast/toast.hook';
import { useSocket } from '@socketio/hooks/use-socket.hook';

import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MessageStatus } from '@module-chat/domain/enums/message-status.enum';
import { MessageTypes } from '@module-chat/domain/enums/message-types.enum';

import { EmitSendTextMessageMapper } from '@module-chat/infrastructure/mappers/emit-send-text-message.mapper';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * On send text message hook
 *
 * This hook emits a text message to the socket server and updates the message id in the store
 * [Emission event]
 */
export const useEmitSendTextMessage = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  const addMessage = useChatStore((state) => state.addMessage);
  const updateOneMessageId = useChatStore((state) => state.updateOneMessageId);

  const { emitWithAck, isConnectedAndStatusConnected } = useSocket();
  const { showToast } = useToast();

  const emitSendTextMessage = useCallback(
    async ({
      data,
      onSuccess,
    }: Omit<EmitSendTextMessageRequest, 'contactId'>) => {
      try {
        if (
          !activeContact?.id ||
          !activeContact?.latestConversation?.id ||
          !data?.trim() ||
          !emitWithAck ||
          !isConnectedAndStatusConnected ||
          !activeContact?.latestConversation?.agent?.id ||
          !activeContact?.latestConversation?.agent?.name
        )
          return;

        const temporalMessageId = uuidv4();
        const newMessage: Message = {
          id: temporalMessageId,
          contacts: [],
          conversationId: activeContact?.latestConversation?.id,
          createdAt: new Date().toISOString().replace('Z', '000Z'),
          deliveredAt: null,
          direction: MessageDirections.OUTGOING,
          eventData: null,
          failedAt: null,
          forwarded: false,
          forwardedManyTimes: false,
          interactiveOptions: null,
          location: null,
          media: null,
          reactions: [],
          readAt: null,
          replyToMessage: null,
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
          contactId: activeContact?.id,
        });

        if (!request) return;

        addMessage({ ...newMessage });

        const ack = await emitWithAck<
          EmitSendTextMessageRequestDTO,
          EmitSendTextMessageResponseDTO
        >(socketEmissionsDictionary.SEND_TEXT_MESSAGE, request);

        const parseAck = JSON.parse(ack as unknown as string);

        const response = EmitSendTextMessageMapper.mapFrom(parseAck);

        if (!response?.success || !response?.messageId) return;

        if (response?.messageId && newMessage) {
          updateOneMessageId(temporalMessageId, response?.messageId);

          const sounder = new Sounder('/sounds/whatsapp-emit-message.mp3');

          sounder.playAudio();
          onSuccess?.();
        }
      } catch (_error) {
        showToast('Error al enviar el mensaje', {
          id: 'emit-send-text-message-error',
          scheme: ToastSchemes.ERROR,
        });

        return;
      }
    },
    [
      activeContact,
      addMessage,
      emitWithAck,
      isConnectedAndStatusConnected,
      showToast,
      updateOneMessageId,
    ],
  );

  return {
    emitSendTextMessage,
  };
};
