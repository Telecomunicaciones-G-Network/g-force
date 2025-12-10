import type {
  GetContactTicketsRequest,
  GetContactTicketsResponse,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { BaseException } from '@http-client/exceptions/base.exception';
import { BadRequestException } from '@http-client/exceptions/bad-request.exception';

import { GetContactTicketsException } from '../../domain/exceptions/get-contact-tickets.exception';

export const getContactTicketsUsecase = async (
  chatRepository: ChatRepository,
  request: GetContactTicketsRequest,
): Promise<GetContactTicketsResponse> => {
  if (!request?.contactId) {
    throw new BadRequestException('El contactId es requerido');
  }

  return chatRepository
    .getContactTickets(request)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new GetContactTicketsException({
        contactId: request?.contactId,
        status: error?.status,
      });
    });
};
