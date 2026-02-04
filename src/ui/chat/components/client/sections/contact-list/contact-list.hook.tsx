'use client';

import type { Contact } from '@module-chat/domain/interfaces';

import { useEffect } from 'react';

import { useMediaQuery } from '@hook/use-media-query.hook';

import { CHAT_DESKTOP_VIEWPORT } from '@ui-chat/constants/chat-desktop-viewport.constant';

import { useAgentSocketEvents } from '@ui-chat/hooks/agent-socket-events.hook';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useContactList = (contactsResponse: Contact[]) => {
  const chatMode = useContactStore((state) => state.chatMode);
  const contacts = useContactStore((state) => state.contacts);

  const isDesktop = useMediaQuery(CHAT_DESKTOP_VIEWPORT);

  useAgentSocketEvents();

  const setContacts = useContactStore((state) => state.setContacts);

  useEffect(() => {
    setContacts(contactsResponse);
  }, [contactsResponse, setContacts]);

  // Contacts are now pre-filtered from the server, no need for client-side filtering
  return { chatMode, contacts, isDesktop };
};
