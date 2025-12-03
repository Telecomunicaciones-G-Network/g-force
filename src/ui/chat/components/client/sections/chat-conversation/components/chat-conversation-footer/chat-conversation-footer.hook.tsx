'use client';

import type { ChangeEvent, FormEvent } from 'react';

import { useState } from 'react';

import { ChatSendModes } from '@ui-chat/enums/chat-send-mode.enum';

import { useEmitSendImageMessage } from '@ui-chat/hooks/emit-send-image-message.hook';
import { useEmitSendTextMessage } from '@ui-chat/hooks/emit-send-text-message.hook';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatConversationFooter = () => {
  const [message, setMessage] = useState<string>('');

  const sendMode = useChatStore((state) => state.sendMode);
  const activeContact = useContactStore((state) => state.activeContact);

  const { emitSendImageMessage } = useEmitSendImageMessage();
  const { emitSendTextMessage } = useEmitSendTextMessage();

  const changeMessage = (event: ChangeEvent<HTMLInputElement>) =>
    setMessage(event?.target?.value);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!activeContact?.latestConversation?.id) return;

    switch (sendMode) {
      case ChatSendModes.TEXT:
        if (!message?.trim()) return;

        emitSendTextMessage({
          activeContact,
          data: message?.trim(),
          onSuccess: () => {
            setMessage('');
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
    changeMessage,
    message,
    onSubmit,
    sendMode,
  };
};
