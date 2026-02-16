import type {
  GetContactInvoicesRequest,
  GetContactInvoicesResponse,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { GetContactInvoicesException } from '../../domain/exceptions/get-contact-invoices.exception';

import { BaseException } from '@http-client/exceptions/base.exception';
import { BadRequestException } from '@http-client/exceptions/bad-request.exception';

export const getContactInvoicesUsecase = async (
  httpChatRepository: ChatRepository,
  request: GetContactInvoicesRequest,
): Promise<GetContactInvoicesResponse> => {
  if (!request?.contactId) {
    throw new BadRequestException('El contactId es requerido');
  }

  return httpChatRepository
    .getContactInvoices(request)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new GetContactInvoicesException({
        contactId: request?.contactId,
        status: error?.status,
      });
    });
};
