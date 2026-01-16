'use client';

import type { GetTicketByIdResponse } from '@module-ticket/domain/interfaces';

import { useQuery } from '@tanstack/react-query';

import { TICKET_TAGS } from '@module-ticket/infrastructure/dictionaries/ticket-tags.dictionary';
import { GetTicketByIdQuery } from '@module-ticket/infrastructure/queries/get-ticket-by-id.query';

export interface UseTicketByIdOptions {
  ticketId: string;
  enabled?: boolean;
}

export const useTicketById = (options: UseTicketByIdOptions) => {
  const { ticketId, enabled = true } = options;

  const { data, isError, isLoading, refetch } =
    useQuery<GetTicketByIdResponse>({
      queryKey: [TICKET_TAGS.GET_TICKET_BY_ID, ticketId],
      queryFn: () => GetTicketByIdQuery({ ticketId }),
      enabled: enabled && !!ticketId,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    });

  return {
    isError: isError || !data?.success,
    isLoading,
    refetch,
    ticket: data?.ticket ?? null,
  };
};
