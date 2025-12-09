import type { GetContactInformationResponse } from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { GetContactInformationException } from '../../domain/exceptions/get-contact-information.exception';

import { BaseException } from '@http-client/exceptions/base.exception';
import { BadRequestException } from '@http-client/exceptions/bad-request.exception';

export const getContactInformationUsecase = async (
  chatRepository: ChatRepository,
  contactId: string,
): Promise<GetContactInformationResponse> => {
  if (!contactId) {
    throw new BadRequestException('Contact ID is required');
  }

  return await chatRepository
    .getContactInformation(contactId)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new GetContactInformationException({
        contactId: contactId,
        status: error?.status,
      });
    });
};
