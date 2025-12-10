import type {
  GetContactNotesRequest,
  GetContactNotesResponse,
} from '../../domain/interfaces';

import { getContactNotesUsecase } from '../../application/usecases/get-contact-notes.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

export const GetContactNotesQuery = async (
  query: GetContactNotesRequest,
): Promise<GetContactNotesResponse> => {
  return await getContactNotesUsecase(httpChatRepository, query);
};
