import type {
  GetContactContractsRequest,
  GetContactContractsResponse,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { BadRequestException } from '@http-client/exceptions/bad-request.exception';
import { BaseException } from '@http-client/exceptions/base.exception';
import { GetContactContractsException } from '../../domain/exceptions/get-contact-contracts.exception';

export const getContactContractsUsecase = async (
  chatRepository: ChatRepository,
  request: GetContactContractsRequest,
): Promise<GetContactContractsResponse> => {
  if (!request?.contactId) {
    throw new BadRequestException('El contactId es requerido');
  }

  return chatRepository
    .getContactContracts(request)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new GetContactContractsException({
        contactId: request?.contactId,
        status: error?.status,
      });
    });
};
