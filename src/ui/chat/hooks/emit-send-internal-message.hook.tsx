'use client';

import type {
  EmitSendInternalMessageRequest,
  Message,
} from '@module-chat/domain/interfaces';
import type {
  EmitSendInternalMessageRequestDTO,
  EmitSendInternalMessageResponseDTO,
} from '@module-chat/infrastructure/dtos';

import { useCallback } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Sounder } from '@sounder/classes/sounder.class';

import { useSocket } from '@socketio/hooks/use-socket.hook';
import { useToast } from '@gnetwork-ui/components/organisms/toasts/toast/toast.hook';

import { ToastSchemes } from '@gnetwork-ui/components/organisms/toasts/toast/enums/toast-schemes.enum';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MessageStatus } from '@module-chat/domain/enums/message-status.enum';
import { MessageTypes } from '@module-chat/domain/enums/message-types.enum';

import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';

import { EmitSendInternalMessageMapper } from '@module-chat/infrastructure/mappers/emit-send-internal-message.mapper';

import { chatSoundDictionary } from '@ui-chat/dictionaries/chat-sounds.dictionary';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * On send internal message hook
 *
 * This hook emits a internal message to the socket server and updates the message id in the store
 * - Send the internal message to the socket server
 * - Adds the internal message to the chat store
 * - Update the internal message after processing the response from the socket server
 * [Emission event]
 */
export const useEmitSendInternalMessage = () => {
  // TODO: Use useOptimistic hook to update the message id in the store if failed or if is successfully.
  const activeContact = useContactStore((state) => state.activeContact);

  const addMessage = useChatStore((state) => state.addMessage);
  const updateOneMessageId = useChatStore((state) => state.updateOneMessageId);

  const { emitWithAck, isConnectedAndStatusConnected } = useSocket();
  const { showToast } = useToast();

  const emitSendInternalMessage = useCallback(
    async ({
      internalMessage,
      onSuccess,
    }: Omit<EmitSendInternalMessageRequest, 'contactId'>) => {
      try {
        if (
          !activeContact?.id ||
          !activeContact?.latestConversation?.agent?.id ||
          !activeContact?.latestConversation?.agent?.name ||
          !emitWithAck ||
          !isConnectedAndStatusConnected
        )
          // TODO: Show alert for error
          // Register error
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
          status: MessageStatus.READ,
          text: internalMessage,
          type: MessageTypes.INTERNAL,
          updatedAt: null,
        };

        const requestDto = EmitSendInternalMessageMapper.mapTo({
          contactId: activeContact?.id,
          internalMessage,
        });

        if (!requestDto?.contact_id || !requestDto?.text)
          // TODO: show alert for error
          // TODO: Register error
          return;

        addMessage(newMessage);

        const ack = await emitWithAck<
          EmitSendInternalMessageRequestDTO,
          EmitSendInternalMessageResponseDTO
        >(socketEmissionsDictionary.SEND_INTERNAL_MESSAGE, requestDto);

        const parseAck = JSON.parse(ack as unknown as string);

        const response = EmitSendInternalMessageMapper.mapFrom(parseAck);

        if (!response?.success || !response?.messageId)
          // TODO: show alert for error
          // TODO: Register error
          return;

        updateOneMessageId(temporalMessageId, response?.messageId);

        const sounder = new Sounder(chatSoundDictionary.whatsappEmitMessage);

        sounder.playAudio();

        onSuccess?.();
      } catch (_error) {
        // TODO: Handler error better
        showToast('Error al enviar el mensaje interno', {
          id: 'emit-send-internal-message-error',
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
    emitSendInternalMessage,
  };
};
