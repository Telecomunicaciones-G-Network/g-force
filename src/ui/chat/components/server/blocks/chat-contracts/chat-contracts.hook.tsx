'use client';

import type { GetContactContractsResponse } from '@module-chat/domain/interfaces';

import { useQuery } from '@tanstack/react-query';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { GetContactContractsQuery } from '@module-chat/infrastructure/queries/get-contact-contracts.query';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatContracts = () => {
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
    contracts: data?.contracts ?? [],
    isError: isError || !data?.success,
    isLoading,
  };
};
