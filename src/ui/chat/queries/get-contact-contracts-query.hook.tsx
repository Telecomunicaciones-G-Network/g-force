'use client';

import type { GetContactContractsResponse } from '@module-chat/domain/interfaces';

import { useQuery } from '@tanstack/react-query';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { GetContactContractsQuery } from '@module-chat/infrastructure/queries/get-contact-contracts.query';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * @name useGetContactContractsQuery
 *
 * @description Hook to get the contact contracts query.
 *
 * @returns data - The data of the query.
 * @returns isError - The error of the query.
 * @returns isLoading - The loading of the query.
 *
 * TODO: Handler better query parameters
 */
export const useGetContactContractsQuery = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  const { data, isError, isLoading } = useQuery<GetContactContractsResponse>({
    queryKey: [
      CHAT_TAGS.GET_CHAT_CONTACT_CONTRACTS,
      activeContact?.id,
      { page_size: 20, page: 1 },
    ],
    queryFn: () =>
      GetContactContractsQuery({
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
    data,
    isError,
    isLoading,
  };
};
