'use client';

import type { GetContactTicketsResponse } from '@module-chat/domain/interfaces';

import { useQuery } from '@tanstack/react-query';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { GetContactTicketsQuery } from '@module-chat/infrastructure/queries/get-contact-tickets.query';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatTickets = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  const { data, isError, isLoading } = useQuery<GetContactTicketsResponse>({
    queryKey: [
      CHAT_TAGS.GET_CHAT_CONTACT_TICKETS,
      activeContact?.id,
      { page_size: 20, page: 1 },
    ],
    queryFn: () =>
      GetContactTicketsQuery({
        contactId: activeContact?.id ?? '',
        limit: 20,
        page: 1,
      }),
    enabled: !!activeContact?.id,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return {
    isError: isError || !data?.success,
    isLoading,
    tickets: data?.tickets ?? [],
  };
};
