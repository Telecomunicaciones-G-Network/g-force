import type {
  CreateTicketRequest,
  CreateTicketResponse,
} from '../../domain/interfaces';
import type { TicketRepository } from '../../domain/repositories';

import { BaseException } from '@http-client/exceptions/base.exception';

import { CreateTicketException } from '../../domain/exceptions/create-ticket.exception';

export const createTicketUsecase = async (
  ticketRepository: TicketRepository,
  request: CreateTicketRequest,
): Promise<CreateTicketResponse> => {
  return ticketRepository
    .createTicket(request)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new CreateTicketException({
        status: error?.status,
      });
    });
};
