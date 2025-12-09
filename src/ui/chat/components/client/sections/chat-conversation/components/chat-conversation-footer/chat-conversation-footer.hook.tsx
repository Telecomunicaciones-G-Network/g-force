'use client';

import type { ChangeEvent, FormEvent } from 'react';

import { useState } from 'react';

import { useEmitSendTextMessage } from '@ui-chat/hooks/emit-send-text-message.hook';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatConversationFooter = () => {
  const [message, setMessage] = useState<string>('');

  const sendMode = useChatStore((state) => state.sendMode);
  const activeContact = useContactStore((state) => state.activeContact);

  const { emitSendTextMessage } = useEmitSendTextMessage();

  const changeMessage = (event: ChangeEvent<HTMLInputElement>) =>
    setMessage(event?.target?.value);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!activeContact?.id || !message?.trim()) return;

    emitSendTextMessage({
      data: message?.trim(),
      onSuccess: () => {
        setMessage('');
      },
    });
  };

  return {
    changeMessage,
    message,
    onSubmit,
    sendMode,
  };
};
