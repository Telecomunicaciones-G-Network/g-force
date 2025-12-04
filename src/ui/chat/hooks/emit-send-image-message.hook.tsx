'use client';

import type { MimeType } from '@http-client/types';

import { useCallback } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { useSocket } from '@socketio/hooks/use-socket.hook';
import { Sounder } from '@sounder/classes/sounder.class';

import { uploadChatMediaCommand } from '@module-chat/infrastructure/commands/upload-chat-media.command';

import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';
import { MessageValues } from '@/src/modules/chat/domain/interfaces';
import { MessageDirections } from '@/src/modules/chat/domain/enums/message-directions.enum';
import { MessageStatus } from '@/src/modules/chat/domain/enums/message-status.enum';
import { MessageTypes } from '@/src/modules/chat/domain/enums/message-types.enum';
import { ChatSendModes } from '../enums/chat-send-mode.enum';

export const useEmitSendImageMessage = () => {
  const file = useChatStore((state) => state.file);
  const activeContact = useContactStore((state) => state.activeContact);

  const setFile = useChatStore((state) => state.setFile);
  const setSendMode = useChatStore((state) => state.setSendMode);

  const addMessage = useChatStore((state) => state.addMessage);

  const { emitWithAck, isConnectedAndStatusConnected } = useSocket();

  const emitSendImageMessage = useCallback(async () => {
    try {
      console.log('emitSendImageMessage', file);

      if (
        !emitWithAck ||
        !isConnectedAndStatusConnected ||
        !activeContact?.latestConversation?.id ||
        !file
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
        media: {
          filename: file?.name,
          id: file?.name,
          mimeType: file?.type,
          type: 'IMAGE',
        },
        reactions: [],
        readAt: null,
        sender: {
          id: activeContact?.latestConversation?.agent?.id,
          name: activeContact?.latestConversation?.agent?.name,
        },
        sentAt: null,
        status: MessageStatus.PENDING,
        text: '',
        type: MessageTypes.TEXT,
        updatedAt: null,
      };

      const response = await uploadChatMediaCommand({
        file: file?.file,
        filename: file.name,
        mediaType: file.type as MimeType,
      });

      if (!response?.mediaId) {
        return;
      }

      const ack = await emitWithAck<unknown, unknown>(
        socketEmissionsDictionary.SEND_IMAGE_MESSAGE,
        {
          conversation_id: activeContact?.latestConversation?.id,
          media_id: response?.mediaId,
        },
      );

      const parseAck = JSON.parse(ack as unknown as string);

      console.log('parseAck', parseAck);

      const sounder = new Sounder('/sounds/whatsapp_emit_message.mp3');

      addMessage({ ...newMessage });
      sounder.playAudio();
      setFile(null);
      setSendMode(ChatSendModes.IMAGE);
    } catch (error) {
      console.error('error', error);
    }
  }, [
    activeContact?.latestConversation?.id,
    emitWithAck,
    file,
    isConnectedAndStatusConnected,
    activeContact?.latestConversation?.agent?.id,
    activeContact?.latestConversation?.agent?.name,
    addMessage,
    setFile,
    setSendMode,
  ]);

  return {
    emitSendImageMessage,
  };
};
