'use client';

import type { Contact } from '@module-chat/domain/interfaces';

import { useEffect } from 'react';

import { useMediaQuery } from '@hook/use-media-query.hook';

import { CHAT_DESKTOP_VIEWPORT } from '@ui-chat/constants/chat-desktop-viewport.constant';

import { useCommonContactsSocketEvents } from '@ui-chat/hooks/common-contacts-socket-events.hook';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * @name UseContactsListProps
 *
 * @description This interface is used to define the options for the contact list.
 *
 * @property {boolean} hasMore - Whether the contact list has more contacts.
 * @property {string | null} nextCursor - The next cursor for the contact list.
 */
interface UseContactsListProps {
  contactsResponse: Contact[];
  hasMore?: boolean;
  nextCursor?: string | null;
}

/**
 * @function useContactsSection
 *
 * @description This hook is used to get the contact list state.
 *
 * @property {Contact[]} contactsResponse - The contacts response.
 * @property {boolean} hasMore - Whether the contact list has more contacts.
 * @property {string | null} nextCursor - The next cursor for the contact list.
 *
 * @returns chatMode - The chat mode.
 * @returns contacts - The contacts.
 * @returns isDesktop - Whether the screen is desktop.
 */
export const useContactsSection = ({
  contactsResponse,
  hasMore = false,
  nextCursor = null,
}: Readonly<UseContactsListProps>) => {
  const chatMode = useContactStore((state) => state.chatMode);
  const contacts = useContactStore((state) => state.contacts);

  const isDesktop = useMediaQuery(CHAT_DESKTOP_VIEWPORT);

  useCommonContactsSocketEvents();

  const setContacts = useContactStore((state) => state.setContacts);
  const changeContactsPagination = useContactStore(
    (state) => state.changeContactsPagination,
  );

  useEffect(() => {
    setContacts(contactsResponse);

    changeContactsPagination({
      hasMore: hasMore ?? false,
      nextCursor: nextCursor ?? null,
    });
  }, [
    changeContactsPagination,
    contactsResponse,
    hasMore,
    nextCursor,
    setContacts,
  ]);

  return { chatMode, contacts, isDesktop };
};
