import type {
  GetContactTicketsRequest,
  GetContactTicketsResponse,
} from '../../domain/interfaces';

import { httpChatRepository } from '../repositories/http-chat.repository';

import { getContactTicketsUsecase } from '../../application/usecases/get-contact-tickets.usecase';

export const GetContactTicketsQuery = async (
  query: GetContactTicketsRequest,
): Promise<GetContactTicketsResponse> => {
  return await getContactTicketsUsecase(httpChatRepository, query);
};
