// DONE:

'use client';

import type { ContactValues } from '@module-chat/domain/interfaces';

import { useEffect } from 'react';

import { useMediaQuery } from '@hook/use-media-query.hook';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';
import { CHAT_DESKTOP_VIEWPORT } from '@ui-chat/constants/chat-desktop-viewport.constant';

export const useChatList = (contactsResponse: ContactValues[]) => {
  const isDesktop = useMediaQuery(CHAT_DESKTOP_VIEWPORT);

  const chatMode = useContactStore((state) => state.chatMode);
  const contacts = useContactStore((state) => state.contacts);

  const setContacts = useContactStore((state) => state.setContacts);

  useEffect(() => {
    setContacts(contactsResponse);
  }, [contactsResponse, setContacts]);

  return { chatMode, contacts, isDesktop };
};
