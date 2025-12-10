import type {
  GetContactNotesRequest,
  GetContactNotesResponse,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { BaseException } from '@http-client/exceptions/base.exception';
import { BadRequestException } from '@http-client/exceptions/bad-request.exception';
import { GetContactNotesException } from '../../domain/exceptions/get-contact-notes.exception';

export const getContactNotesUsecase = async (
  chatRepository: ChatRepository,
  request: GetContactNotesRequest,
): Promise<GetContactNotesResponse> => {
  if (!request?.contactId) {
    throw new BadRequestException('Contact ID is required');
  }

  return await chatRepository
    .getContactNotes(request)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new GetContactNotesException({
        contactId: request?.contactId,
        status: error?.status,
      });
    });
};
