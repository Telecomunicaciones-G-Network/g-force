// PENDING:

'use client';

import type { ContactValues } from '@module-chat/domain/interfaces';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatListBody = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  const setActiveContact = useContactStore((state) => state.setActiveContact);
  const setChatMode = useContactStore((state) => state.setChatMode);

  const changeActiveContact = (contact: ContactValues) => {
    setActiveContact(contact);
    setChatMode(ChatModes.CHAT);
  };

  return { activeContact, changeActiveContact };
};
