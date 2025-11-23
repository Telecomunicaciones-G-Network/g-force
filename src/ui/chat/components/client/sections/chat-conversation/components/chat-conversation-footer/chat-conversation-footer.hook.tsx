'use client';

// import type { EmitSendTextMessageRequest } from '@module-chat/domain/interfaces';
/* import type {
  EmitSendTextMessageRequestDTO,
  EmitSendTextMessageResponseDTO,
} from '@module-chat/infrastructure/dtos'; */
import type { ChatConversationFormData } from './interfaces';

// import { useCallback } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { Message } from '@module-chat/domain/entities/message.entity';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MessageStatus } from '@module-chat/domain/enums/message-status.enum';
import { MessageTypes } from '@module-chat/domain/enums/message-types.enum';

// import { useSocket } from '@socketio/hooks/use-socket.hook';

// import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';

// import { EmitSendTextMessageMapper } from '@module-chat/infrastructure/mappers/emit-send-text-message.mapper';

import { chatConversationFormSchema } from '@ui-chat/schemas/chat-conversation-form.schema';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatConversationFooter = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  const addMessage = useChatStore((state) => state.addMessage);

  const { control, handleSubmit, setValue } = useForm<ChatConversationFormData>(
    {
      defaultValues: {
        text: '',
      },
      mode: 'onSubmit',
      resolver: zodResolver(chatConversationFormSchema),
      reValidateMode: 'onSubmit',
    },
  );
  // const { emitWithAck, isConnectedAndStatusConnected } = useSocket();

  const onSubmit = async (data: ChatConversationFormData) => {
    if (!activeContact?.latestConversation?.id) return;

    const newMessage = new Message(
      uuidv4(),
      null,
      [],
      activeContact?.latestConversation?.id,
      new Date().toISOString(),
      null,
      MessageDirections.OUTGOING,
      null,
      false,
      false,
      null,
      null,
      [],
      null,
      {
        id: activeContact?.latestConversation?.agent?.id,
        name: activeContact?.latestConversation?.agent?.name,
      },
      null,
      MessageStatus.PENDING,
      data?.text?.trim(),
      MessageTypes.TEXT,
      null,
    );

    addMessage(newMessage.toValues());

    setValue('text', '');

    /* const response = await sendTextMessage({
      conversationId: activeContact?.latestConversation?.id,
      text: data?.text?.trim(),
    });

    console.log('response back', response); */
  };

  /* const sendTextMessage = useCallback(
    async (emission: EmitSendTextMessageRequest) => {
      try {
        if (!emitWithAck || !isConnectedAndStatusConnected) return;

        const request = EmitSendTextMessageMapper.mapTo(emission);

        const ack = await emitWithAck<
          EmitSendTextMessageRequestDTO,
          EmitSendTextMessageResponseDTO
        >(socketEmissionsDictionary.SEND_TEXT_MESSAGE, request);

        const parseAck = JSON.parse(ack as unknown as string);

        const response = EmitSendTextMessageMapper.mapFrom(parseAck);

        if (!response?.success) return;

        setValue('text', '');

        return response;
      } catch (error) {
        console.error('error', error);
      }
    },
    [emitWithAck, isConnectedAndStatusConnected, setValue],
  ); */

  return {
    control,
    handleSubmit,
    onSubmit,
  };
};
