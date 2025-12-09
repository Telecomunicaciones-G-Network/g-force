'use client';

import type { GetContactInvoicesResponse } from '@module-chat/domain/interfaces';

import { useQuery } from '@tanstack/react-query';

import { GetContactInvoicesQuery } from '@module-chat/infrastructure/queries/get-contact-invoices.query';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatInvoices = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  const { data, isError, isLoading } = useQuery<GetContactInvoicesResponse>({
    queryKey: ['chat-invoices', activeContact?.id, { limit: 20, page: 1 }],
    queryFn: () =>
      GetContactInvoicesQuery({
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
    invoices: data?.invoices ?? [],
    invoicingCycle: data?.extra?.cycle,
    isError,
    isLoading,
  };
};
