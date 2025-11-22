'use client';

import type { ChatConversationFormData } from './interfaces';

import { useCallback } from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useSocket } from '@socketio/hooks/use-socket.hook';

import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';

import { chatConversationFormSchema } from '@ui-chat/schemas/chat-conversation-form.schema';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

interface SendTextMessageEmission {
  conversation_id: string;
  text: string;
}

export const useChatConversationFooter = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  const { control, handleSubmit } = useForm<ChatConversationFormData>({
    defaultValues: {
      text: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(chatConversationFormSchema),
    reValidateMode: 'onSubmit',
  });
  const { emitWithAck, isConnectedAndStatusConnected } = useSocket();

  const onSubmit = async (data: ChatConversationFormData) => {
    if (!activeContact?.latestConversation?.id) return;

    const response = await sendTextMessage({
      conversation_id: activeContact?.latestConversation?.id,
      text: data?.text?.trim(),
    });

    console.log('response back', response);
  };

  const sendTextMessage = useCallback(
    async (emission: SendTextMessageEmission) => {
      try {
        if (!emitWithAck || !isConnectedAndStatusConnected) return;

        const response = await emitWithAck<SendTextMessageEmission, unknown>(
          socketEmissionsDictionary.SEND_TEXT_MESSAGE,
          {
            conversation_id: emission?.conversation_id,
            text: emission?.text,
          },
        );

        console.log('response', response);

        return response;
      } catch (error) {
        console.error('error', error);
      }
    },
    [emitWithAck, isConnectedAndStatusConnected],
  );

  return {
    control,
    handleSubmit,
    onSubmit,
  };
};
