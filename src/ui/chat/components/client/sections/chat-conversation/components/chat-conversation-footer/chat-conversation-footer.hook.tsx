'use client';

import type { MessageValues } from '@module-chat/domain/interfaces';
import type { ChatConversationFormData } from './interfaces';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

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
      media: null,
      reactions: [],
      readAt: null,
      sender: {
        id: activeContact?.latestConversation?.agent?.id,
        name: activeContact?.latestConversation?.agent?.name,
      },
      sentAt: null,
      status: MessageStatus.PENDING,
      text: data?.text?.trim(),
      type: MessageTypes.TEXT,
      updatedAt: null,
    };

    emitSendTextMessage({
      conversationId: activeContact?.latestConversation?.id,
      message: newMessage,
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
