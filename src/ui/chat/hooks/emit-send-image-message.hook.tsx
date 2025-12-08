'use client';

import type { MimeType } from '@http-client/types';
import type { MessageValues } from '@module-chat/domain/interfaces';

import { useCallback } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { useSocket } from '@socketio/hooks/use-socket.hook';
// import { Sounder } from '@sounder/classes/sounder.class';

import { uploadChatMediaCommand } from '@module-chat/infrastructure/commands/upload-chat-media.command';

// import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MessageStatus } from '@module-chat/domain/enums/message-status.enum';
import { MediaStorageStatus } from '@module-chat/domain/enums/media-storage-status.enum';
import { MediaTypes } from '@module-chat/domain/enums/media-types.enum';
import { MessageTypes } from '@module-chat/domain/enums/message-types.enum';

import { EmitSendImageMessageMapper } from '@module-chat/infrastructure/mappers/emit-send-image-message.mapper';

// import { ChatSendModes } from '@ui-chat/enums/chat-send-mode.enum';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useEmitSendImageMessage = () => {
  const file = useChatStore((state) => state.file);
  const activeContact = useContactStore((state) => state.activeContact);

  // const setFile = useChatStore((state) => state.setFile);
  // const setSendMode = useChatStore((state) => state.setSendMode);

  const addMessage = useChatStore((state) => state.addMessage);

  const { emitWithAck, isConnectedAndStatusConnected } = useSocket();

  const emitSendImageMessage = useCallback(async () => {
    try {
      console.log('file to send', file);

      if (
        !activeContact?.latestConversation?.id ||
        !emitWithAck ||
        !file ||
        !isConnectedAndStatusConnected ||
        !activeContact?.latestConversation?.agent?.id ||
        !activeContact?.latestConversation?.agent?.name
      )
        return;

      const temporalMessageId = uuidv4();
      const temporalMediaId = uuidv4();
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
        media: {
          id: temporalMediaId,
          downloadUrl: file?.preview ?? null,
          filename: file?.name,
          mimeType: file?.type,
          storageStatus: MediaStorageStatus.PENDING,
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

      console.log('newMessage', newMessage);

      const response = await uploadChatMediaCommand({
        file: file?.file,
        filename: file.name,
        mediaType: file.type as MimeType,
      });

      console.log('response', response);

      if (!response?.mediaId) {
        return;
      }

      const request = EmitSendImageMessageMapper.mapTo({
        conversationId: activeContact?.latestConversation?.id,
        mediaId: response?.mediaId,
      });

      console.log('request', request);

      addMessage({
        ...newMessage,
        media: {
          ...newMessage?.media,
          id: response?.mediaId,
          downloadUrl: newMessage?.media?.downloadUrl ?? null,
          filename: newMessage?.media?.filename ?? '',
          mimeType: newMessage?.media?.mimeType ?? '',
          storageStatus:
            newMessage?.media?.storageStatus ?? MediaStorageStatus.PENDING,
          type: newMessage?.media?.type ?? MediaTypes.IMAGE,
        },
      });

      /*const ack = await emitWithAck<unknown, unknown>(
        socketEmissionsDictionary.SEND_IMAGE_MESSAGE,
        {
          conversation_id: activeContact?.latestConversation?.id,
          media_id: response?.mediaId,
        },
      );

      const parseAck = JSON.parse(ack as unknown as string);

      console.log('parseAck', parseAck);

      const sounder = new Sounder('/sounds/whatsapp-emit-message.mp3');

      addMessage({ ...newMessage });
      sounder.playAudio();
      setFile(null);
      setSendMode(ChatSendModes.IMAGE); */
    } catch (error) {
      console.error('error', error);
    }
  }, [
    activeContact,
    addMessage,
    emitWithAck,
    file,
    isConnectedAndStatusConnected,
  ]);

  return {
    emitSendImageMessage,
  };
};
