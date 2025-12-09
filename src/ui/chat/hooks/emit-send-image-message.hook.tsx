'use client';

import type {
  EmitSendImageMessageRequest,
  MessageValues,
} from '@module-chat/domain/interfaces';
import type {
  EmitSendImageMessageRequestDTO,
  EmitSendImageMessageResponseDTO,
} from '@module-chat/infrastructure/dtos';

import { useCallback } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { useSocket } from '@socketio/hooks/use-socket.hook';
import { Sounder } from '@sounder/classes/sounder.class';

import { MediaStorageStatus } from '@module-chat/domain/enums/media-storage-status.enum';
import { MediaTypes } from '@module-chat/domain/enums/media-types.enum';
import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MessageStatus } from '@module-chat/domain/enums/message-status.enum';
import { MessageTypes } from '@module-chat/domain/enums/message-types.enum';

import { uploadChatMediaCommand } from '@module-chat/infrastructure/commands/upload-chat-media.command';

import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';

import { EmitSendImageMessageMapper } from '@module-chat/infrastructure/mappers/emit-send-image-message.mapper';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useEmitSendImageMessage = () => {
  const file = useChatStore((state) => state.file);
  const activeContact = useContactStore((state) => state.activeContact);

  const addMessage = useChatStore((state) => state.addMessage);
  const updateOneMessageId = useChatStore((state) => state.updateOneMessageId);

  const { emitWithAck, isConnectedAndStatusConnected } = useSocket();

  const emitSendImageMessage = useCallback(
    async ({
      message,
      onSuccess,
    }: Omit<EmitSendImageMessageRequest, 'contactId' | 'mediaId'>) => {
      try {
        if (
          !activeContact?.id ||
          !activeContact?.latestConversation?.id ||
          !emitWithAck ||
          !file ||
          !isConnectedAndStatusConnected ||
          !activeContact?.latestConversation?.agent?.id ||
          !activeContact?.latestConversation?.agent?.name
        )
          return;

        const temporalMessageId = uuidv4();

        const mediaResponse = await uploadChatMediaCommand({
          file: file?.file,
          filename: file.name,
          mediaType: file.type,
        });

        if (!mediaResponse?.mediaId) {
          return;
        }

        const newMessage: MessageValues = {
          id: temporalMessageId,
          caption: message ?? null,
          contacts: [],
          conversationId: activeContact?.latestConversation?.id,
          createdAt: new Date().toISOString().replace('Z', '000Z'),
          deliveredAt: null,
          direction: MessageDirections.OUTGOING,
          failedAt: null,
          forwarded: false,
          forwardedManyTimes: false,
          location: null,
          media: {
            id: mediaResponse?.mediaId,
            downloadUrl: file?.preview ?? null,
            filename: file?.name,
            mimeType: file?.type,
            storageStatus: MediaStorageStatus.AVAILABLE,
            type: MediaTypes.IMAGE,
          },
          reactions: [],
          readAt: null,
          sender: {
            id: activeContact?.latestConversation?.agent?.id,
            isBot: false,
            name: activeContact?.latestConversation?.agent?.name,
          },
          sentAt: null,
          status: MessageStatus.PENDING,
          text: null,
          type: MessageTypes.IMAGE,
          updatedAt: null,
        };

        const request = EmitSendImageMessageMapper.mapTo({
          contactId: activeContact?.id,
          mediaId: mediaResponse?.mediaId,
        });

        if (!request) return;

        addMessage({
          ...newMessage,
        });

        const ack = await emitWithAck<
          EmitSendImageMessageRequestDTO,
          EmitSendImageMessageResponseDTO
        >(socketEmissionsDictionary.SEND_IMAGE_MESSAGE, request);

        const parseAck = JSON.parse(ack as unknown as string);

        const response = EmitSendImageMessageMapper.mapFrom(parseAck);

        if (response?.messageId) {
          updateOneMessageId(temporalMessageId, response?.messageId);

          const sounder = new Sounder('/sounds/whatsapp-emit-message.mp3');

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
      file,
      isConnectedAndStatusConnected,
      updateOneMessageId,
    ],
  );

  return {
    emitSendImageMessage,
  };
};
