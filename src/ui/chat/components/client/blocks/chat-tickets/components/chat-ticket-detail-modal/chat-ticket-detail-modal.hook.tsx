import { useQuery } from '@tanstack/react-query';

import { GetTicketByIdQuery } from '@module-ticket/infrastructure/queries/get-ticket-by-id.query';

interface UseChatTicketDetailModalProps {
  ticketId: number;
}

export const useChatTicketDetailModal = ({
  ticketId,
}: UseChatTicketDetailModalProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['ticket-detail', ticketId],
    queryFn: () => GetTicketByIdQuery({ ticketId: String(ticketId) }),
  });

  return {
    ticket: data?.results || null,
    isLoading,
  };
};
