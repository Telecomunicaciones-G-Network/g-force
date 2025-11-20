// PENDING:

'use client';

import type { ContactValues } from '@module-chat/domain/interfaces';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useChatStore } from '@ui-chat/stores/chat.store';

export const useChatListBody = () => {
  const activeContact = useChatStore((state) => state.activeContact);

  const setActiveContact = useChatStore((state) => state.setActiveContact);
  const setChatMode = useChatStore((state) => state.setChatMode);

  const changeActiveContact = (contact: ContactValues) => {
    setActiveContact(contact);
    setChatMode(ChatModes.CHAT);
  };

  return { activeContact, changeActiveContact };
};
