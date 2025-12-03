'use client';

import type { MimeType } from '@http-client/types';

import { uploadChatMediaCommand } from '@module-chat/infrastructure/commands/upload-chat-media.command';

import { useChatStore } from '../stores/chat-store/chat.store';

export const useEmitSendImageMessage = () => {
  const file = useChatStore((state) => state.file);

  const emitSendImageMessage = async () => {
    try {
      if (!file) return;

      console.log('Voy a enviar la imagen');

      const response = await uploadChatMediaCommand({
        file: file?.file,
        filename: file.name,
        mediaType: file.type as MimeType,
      });

      console.log('response', response);
    } catch (error) {
      console.error('error', error);
    }
  };

  return {
    emitSendImageMessage,
  };
};
