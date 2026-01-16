'use client';

import type {
  CreateTicketRequest,
  CreateTicketResponse,
} from '@module-ticket/domain/interfaces';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TICKET_TAGS } from '@module-ticket/infrastructure/dictionaries/ticket-tags.dictionary';
import { CreateTicketCommand } from '@module-ticket/infrastructure/commands/create-ticket.command';

import { useTicketStore } from '@ui-ticket/stores/ticket-store/ticket.store';

export interface UseCreateTicketOptions {
  onSuccess?: (data: CreateTicketResponse) => void;
  onError?: (error: Error) => void;
}

export const useCreateTicket = (options: UseCreateTicketOptions = {}) => {
  const { onSuccess, onError } = options;
  const queryClient = useQueryClient();
  const addTicket = useTicketStore((state) => state.addTicket);

  const mutation = useMutation<CreateTicketResponse, Error, CreateTicketRequest>(
    {
      mutationFn: (request: CreateTicketRequest) => CreateTicketCommand(request),
      onSuccess: (data) => {
        if (data?.ticket) {
          addTicket(data.ticket);
        }

        queryClient.invalidateQueries({
          queryKey: [TICKET_TAGS.GET_TICKETS],
        });

        onSuccess?.(data);
      },
      onError: (error) => {
        onError?.(error);
      },
    },
  );

  return {
    createTicket: mutation.mutate,
    createTicketAsync: mutation.mutateAsync,
    isCreating: mutation.isPending,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
  };
};
