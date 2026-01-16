'use client';

import type { GetTicketsResponse } from '@module-ticket/domain/interfaces';

import { useQuery } from '@tanstack/react-query';

import { TICKET_TAGS } from '@module-ticket/infrastructure/dictionaries/ticket-tags.dictionary';
import { GetTicketsQuery } from '@module-ticket/infrastructure/queries/get-tickets.query';

export interface UseTicketsOptions {
  contactId?: string;
  limit?: number;
  page?: number;
  status?: string;
  enabled?: boolean;
}

export const useTickets = (options: UseTicketsOptions = {}) => {
  const { contactId, limit = 20, page = 1, status, enabled = true } = options;

  const { data, isError, isLoading, refetch } = useQuery<GetTicketsResponse>({
    queryKey: [
      TICKET_TAGS.GET_TICKETS,
      { contactId, limit, page, status },
    ],
    queryFn: () =>
      GetTicketsQuery({
        contactId,
        limit,
        page,
        status,
      }),
    enabled,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return {
    count: data?.count ?? 0,
    hasMore: !!data?.next,
    isError: isError || !data?.success,
    isLoading,
    refetch,
    tickets: data?.tickets ?? [],
  };
};
