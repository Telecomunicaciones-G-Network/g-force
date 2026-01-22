import type {
  GetTicketsRequest,
  GetTicketsResponse,
} from '../../domain/interfaces';
import type { TicketRepository } from '../../domain/repositories';

import { BaseException } from '@http-client/exceptions/base.exception';

import { GetTicketsException } from '../../domain/exceptions/get-tickets.exception';

export const getTicketsUsecase = async (
  ticketRepository: TicketRepository,
  request: GetTicketsRequest,
): Promise<GetTicketsResponse> => {
  return ticketRepository
    .getTickets(request)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new GetTicketsException({
        status: error?.status,
      });
    });
};
