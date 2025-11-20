// DONE:

'use client';

import type { ContactValues } from '@module-chat/domain/interfaces';

import { useEffect } from 'react';

import { useMediaQuery } from '@hookers/use-media-query.hook';

import { useChatStore } from '@ui-chat/stores/chat.store';

export const useChatList = (contactsResponse: ContactValues[]) => {
  const isDesktop = useMediaQuery('(width >= 1024px)');

  const chatMode = useChatStore((state) => state.chatMode);
  const contacts = useChatStore((state) => state.contacts);

  const setContacts = useChatStore((state) => state.setContacts);

  useEffect(() => {
    setContacts(contactsResponse);
  }, [contactsResponse, setContacts]);

  return { chatMode, contacts, isDesktop };
};
