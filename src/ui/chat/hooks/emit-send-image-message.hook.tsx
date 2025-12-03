'use client';

import type { MimeType } from '@http-client/types';

import { useCallback } from 'react';

import { useSocket } from '@socketio/hooks/use-socket.hook';

import { uploadChatMediaCommand } from '@module-chat/infrastructure/commands/upload-chat-media.command';

import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useEmitSendImageMessage = () => {
  const file = useChatStore((state) => state.file);
  const activeContact = useContactStore((state) => state.activeContact);

  const { emitWithAck, isConnectedAndStatusConnected } = useSocket();

  const emitSendImageMessage = useCallback(async () => {
    try {
      if (
        !emitWithAck ||
        !isConnectedAndStatusConnected ||
        !activeContact?.latestConversation?.id ||
        !file
      )
        return;

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
    } catch (error) {
      console.error('error', error);
    }
  }, [
    activeContact?.latestConversation?.id,
    emitWithAck,
    file,
    isConnectedAndStatusConnected,
  ]);

  return {
    emitSendImageMessage,
  };
};
