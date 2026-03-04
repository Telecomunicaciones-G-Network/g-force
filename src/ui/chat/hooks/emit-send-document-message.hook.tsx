'use client';

import type {
  EmitSendDocumentMessageRequest,
  Message,
} from '@module-chat/domain/interfaces';
import type {
  EmitSendDocumentMessageRequestDTO,
  EmitSendDocumentMessageResponseDTO,
} from '@module-chat/infrastructure/dtos';

import { useCallback } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Sounder } from '@sounder/classes/sounder.class';

import { useSocket } from '@socketio/hooks/use-socket.hook';

import { removeExtensionFromFilename } from '@filer/utils/remove-extension-from-filename.util';

import { MediaStorageStatus } from '@module-chat/domain/enums/media-storage-status.enum';
import { MediaTypes } from '@module-chat/domain/enums/media-types.enum';
import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MessageStatus } from '@module-chat/domain/enums/message-status.enum';
import { MessageTypes } from '@module-chat/domain/enums/message-types.enum';

import { uploadChatMediaCommand } from '@module-chat/infrastructure/commands/upload-chat-media.command';

import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';

import { EmitSendDocumentMessageMapper } from '@module-chat/infrastructure/mappers/emit-send-document-message.mapper';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useEmitSendDocumentMessage = () => {
  const file = useChatStore((state) => state.file);
  const activeContact = useContactStore((state) => state.activeContact);

  const addMessage = useChatStore((state) => state.addMessage);
  const updateOneMessageId = useChatStore((state) => state.updateOneMessageId);

  const { emitWithAck, isConnectedAndStatusConnected } = useSocket();

  const emitSendDocumentMessage = useCallback(
    async ({
      message,
      onSuccess,
    }: Omit<EmitSendDocumentMessageRequest, 'contactId' | 'mediaId'>) => {
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

        const parsedFilename = removeExtensionFromFilename(file?.name);

        if (!parsedFilename) {
          // TODO: Show alert for error
          // TODO: Register error
          return;
        }

        const mediaResponse = await uploadChatMediaCommand({
          file: file?.file,
          filename: parsedFilename,
          mediaType: file.type,
        });

        if (!mediaResponse?.mediaId) {
          return;
        }

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
          media: {
            id: mediaResponse?.mediaId,
            downloadUrl: file?.preview ?? null,
            filename: parsedFilename,
            mimeType: file?.type,
            storageStatus: MediaStorageStatus.AVAILABLE,
            type: MediaTypes.DOCUMENT,
          },
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
          text: message ?? null,
          type: MessageTypes.DOCUMENT,
          updatedAt: null,
        };

        const request = EmitSendDocumentMessageMapper.mapTo({
          contactId: activeContact?.id,
          mediaId: mediaResponse?.mediaId,
          message: message ?? null,
        });

        if (!request) return;

        addMessage({
          ...newMessage,
        });

        const ack = await emitWithAck<
          EmitSendDocumentMessageRequestDTO,
          EmitSendDocumentMessageResponseDTO
        >(socketEmissionsDictionary.SEND_DOCUMENT_MESSAGE, request);

        const parseAck = JSON.parse(ack as unknown as string);

        const response = EmitSendDocumentMessageMapper.mapFrom(parseAck);

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
    emitSendDocumentMessage,
  };
};
