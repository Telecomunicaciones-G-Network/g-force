'use client';

import { useTickets } from '@ui-ticket/hooks/use-tickets.hook';

export interface UseTicketListOptions {
  contactId?: string;
}

export const useTicketList = (options: UseTicketListOptions = {}) => {
  const { contactId } = options;

  const { isError, isLoading, tickets, refetch } = useTickets({
    contactId,
    limit: 20,
    page: 1,
    enabled: true,
  });

  return {
    isError,
    isLoading,
    refetch,
    tickets,
  };
};
