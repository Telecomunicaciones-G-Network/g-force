'use client';

import type { ChatConversationFormData } from './interfaces';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { Message } from '@module-chat/domain/entities/message.entity';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MessageStatus } from '@module-chat/domain/enums/message-status.enum';
import { MessageTypes } from '@module-chat/domain/enums/message-types.enum';

import { useEmitSendTextMessage } from '@ui-chat/hooks/emit-send-text-message.hook';

import { chatConversationFormSchema } from '@ui-chat/schemas/chat-conversation-form.schema';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatConversationFooter = () => {
  const { emitSendTextMessage } = useEmitSendTextMessage();

  const activeContact = useContactStore((state) => state.activeContact);

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

    emitSendTextMessage({
      conversationId: activeContact?.latestConversation?.id,
      message: newMessage.toValues(),
      onSuccess: () => {
        setValue('text', '');
      },
    });
  };

  return {
    control,
    handleSubmit,
    onSubmit,
  };
};
