'use client';

import type { Contact } from '@module-chat/domain/interfaces';
import type {
  ContactAssignment,
  ContactPlatform,
  ConversationStatus,
  TeamCodename,
} from '@module-chat/domain/types';

import { useCallback, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { DEFAULT_LIMIT_PARAM } from '@http-client/constants/default-limit-param.constant';

import { GetContactsQuery } from '@module-chat/infrastructure/queries/get-contacts.query';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * @name useContactList
 *
 * @description This hook is used to manage the contact list state.
 *
 * @returns activeAgent - The active agent.
 * @returns activeContact - The active contact.
 * @returns changeActiveContact - The function to change the active contact.
 * @returns contactsNextPage - The next page of contacts.
 * @returns fetchNextContacts - The function to fetch the next contacts.
 * @returns isLoadingMore - Whether the element is loading more.
 *
 * TODO: Do not use key not magic strings on const platform = searchParams.get('platform') as ContactPlatform | null;
 * TODO: Do not use key not magic strings on const status = searchParams.get('status') as ConversationStatus | null;
 * TODO: Group the logic to get final params to send GetContactQuery
 */
export const useContactList = () => {
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  const activeContact = useContactStore((state) => state.activeContact);
  const contactsNextPage = useContactStore((state) => state.contactsNextPage);

  const searchParams = useSearchParams();

  const setActiveContact = useContactStore((state) => state.setActiveContact);
  const setChatMode = useContactStore((state) => state.setChatMode);

  const addContacts = useContactStore((state) => state.addContacts);
  const changeContactsPagination = useContactStore(
    (state) => state.changeContactsPagination,
  );
  const clearUnreadMessagesFromOneContact = useContactStore(
    (state) => state.clearUnreadMessagesFromOneContact,
  );

  const changeActiveContact = (contact: Contact) => {
    setActiveContact(contact);
    setChatMode(ChatModes.CHAT);
    clearUnreadMessagesFromOneContact(contact?.id);
  };

  const fetchNextContacts = useCallback(async () => {
    const platform = searchParams.get('platform') as ContactPlatform | null;
    const assignedTo = searchParams.get(
      'assigned_to',
    ) as ContactAssignment | null;
    const teamCodename = searchParams.get(
      'team_codename',
    ) as TeamCodename | null;

    const statusParam = searchParams.get('status');
    const status =
      statusParam === 'ALL'
        ? undefined
        : ((statusParam as ConversationStatus | null) ?? undefined);

    try {
      setIsLoadingMore(true);

      const response = await GetContactsQuery({
        assignedTo: assignedTo ?? undefined,
        cursor: contactsNextPage ?? undefined,
        limit: DEFAULT_LIMIT_PARAM,
        platform: platform ?? undefined,
        status,
        teamCodename: teamCodename ?? undefined,
      });

      addContacts(response.contacts ?? []);

      changeContactsPagination({
        hasMore: response.hasMore ?? false,
        nextCursor: response.nextCursor ?? null,
      });
    } finally {
      setIsLoadingMore(false);
    }
  }, [addContacts, changeContactsPagination, contactsNextPage, searchParams]);

  return {
    activeContact,
    changeActiveContact,
    contactsNextPage,
    fetchNextContacts,
    isLoadingMore,
  };
};
