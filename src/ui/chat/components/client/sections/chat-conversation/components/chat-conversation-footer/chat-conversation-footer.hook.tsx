'use client';

import type { ChatConversationFormData } from './interfaces';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { ChatSendModes } from '@ui-chat/enums/chat-send-mode.enum';

import { useEmitSendImageMessage } from '@ui-chat/hooks/emit-send-image-message.hook';
import { useEmitSendTextMessage } from '@ui-chat/hooks/emit-send-text-message.hook';

import { chatConversationFormSchema } from '@ui-chat/schemas/chat-conversation-form.schema';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatConversationFooter = () => {
  const { emitSendImageMessage } = useEmitSendImageMessage();
  const { emitSendTextMessage } = useEmitSendTextMessage();

  const sendMode = useChatStore((state) => state.sendMode);
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

    switch (sendMode) {
      case ChatSendModes.TEXT:
        emitSendTextMessage({
          activeContact,
          data,
          onSuccess: () => {
            setValue('text', '');
          },
        });
        break;
      case ChatSendModes.IMAGE:
        emitSendImageMessage();
        break;
      default:
        return;
    }
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    sendMode,
  };
};
