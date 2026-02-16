'use client';

import type { GetContactInformationResponse } from '@module-chat/domain/interfaces';

import { useQuery } from '@tanstack/react-query';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { GetContactInformationQuery } from '@module-chat/infrastructure/queries/get-contact-information.query';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * @name useGetContactInformationQuery
 *
 * @description Hook to get the contact information query.
 *
 * @returns data - The data of the query.
 * @returns isError - The error of the query.
 * @returns isLoading - The loading of the query.
 */
export const useGetContactInformationQuery = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  const { data, isError, isLoading } = useQuery<GetContactInformationResponse>({
    queryKey: [CHAT_TAGS.GET_CHAT_CONTACT_INFORMATION, activeContact?.id],
    queryFn: () => GetContactInformationQuery(activeContact?.id),
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
