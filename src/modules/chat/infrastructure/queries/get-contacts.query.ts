// DONE:

import type {
  GetContactsRequest,
  GetContactsResponse,
} from '../../domain/interfaces';

import { getContactsUsecase } from '../../application/usecases/get-contacts.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

export const GetContactsQuery = async (
  query?: GetContactsRequest,
): Promise<GetContactsResponse> => {
  return await getContactsUsecase(httpChatRepository, query);
};
