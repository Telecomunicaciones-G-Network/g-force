// DONE:

'use client';

import type { ContactValues } from '@module-chat/domain/interfaces';

import { useEffect } from 'react';

import { useMediaQuery } from '@hookers/use-media-query.hook';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatList = (contactsResponse: ContactValues[]) => {
  const isDesktop = useMediaQuery('(width >= 1024px)');

  const chatMode = useContactStore((state) => state.chatMode);
  const contacts = useContactStore((state) => state.contacts);

  const setContacts = useContactStore((state) => state.setContacts);

  useEffect(() => {
    setContacts(contactsResponse);
  }, [contactsResponse, setContacts]);

  return { chatMode, contacts, isDesktop };
};
