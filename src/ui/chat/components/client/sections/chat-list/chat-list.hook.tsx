// DONE:

'use client';

import type { ContactValues } from '@module-chat/domain/interfaces';

import { useEffect } from 'react';

import { useMediaQuery } from '@hook/use-media-query.hook';

import { CHAT_DESKTOP_VIEWPORT } from '@ui-chat/constants/chat-desktop-viewport.constant';

import { useOnNewMessageReceived } from '@ui-chat/hooks/on-new-message-received.hook';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatList = (contactsResponse: ContactValues[]) => {
  const chatMode = useContactStore((state) => state.chatMode);
  const contacts = useContactStore((state) => state.contacts);

  const isDesktop = useMediaQuery(CHAT_DESKTOP_VIEWPORT);
  useOnNewMessageReceived();

  const setContacts = useContactStore((state) => state.setContacts);

  useEffect(() => {
    setContacts(contactsResponse);
  }, [contactsResponse, setContacts]);

  return { chatMode, contacts, isDesktop };
};
