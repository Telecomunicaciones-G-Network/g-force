import type {
  GetTicketByIdRequest,
  GetTicketByIdResponse,
} from '../../domain/interfaces';
import type { TicketRepository } from '../../domain/repositories';

import { BaseException } from '@http-client/exceptions/base.exception';

import { GetTicketByIdException } from '../../domain/exceptions/get-ticket-by-id.exception';

export const getTicketByIdUsecase = async (
  ticketRepository: TicketRepository,
  request: GetTicketByIdRequest,
): Promise<GetTicketByIdResponse> => {
  return ticketRepository
    .getTicketById(request)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new GetTicketByIdException({
        status: error?.status,
      });
    });
};
