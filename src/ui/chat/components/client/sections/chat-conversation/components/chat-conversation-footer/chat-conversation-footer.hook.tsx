'use client';

import type { ChangeEvent, FormEvent } from 'react';

import { useState } from 'react';

import { useCollapsibleButton } from '@gnetwork-ui/components/molecules/buttons/collapsible-button/collapsible-button.hook';

import { useEmitSendTextMessage } from '@ui-chat/hooks/emit-send-text-message.hook';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

import { ChatSendModes } from '@ui-chat/enums/chat-send-mode.enum';

export const useChatConversationFooter = () => {
  const [message, setMessage] = useState<string>('');

  const sendMode = useChatStore((state) => state.sendMode);
  const activeContact = useContactStore((state) => state.activeContact);

  const { isCollapsed, toggleCollapse } = useCollapsibleButton({});
  const { emitSendTextMessage } = useEmitSendTextMessage();

  const setSendMode = useChatStore((state) => state.setSendMode);

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

  const toggleInternalMessageMode = () => {
    toggleCollapse();
    setSendMode(
      sendMode === ChatSendModes.INTERNAL
        ? ChatSendModes.TEXT
        : ChatSendModes.INTERNAL,
    );
  };

  return {
    changeMessage,
    isInternalMessageMode: isCollapsed,
    message,
    onSubmit,
    toggleInternalMessageMode,
    sendMode,
  };
};
