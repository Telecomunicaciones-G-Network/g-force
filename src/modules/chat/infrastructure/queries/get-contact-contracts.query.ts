import type {
  GetContactContractsRequest,
  GetContactContractsResponse,
} from '../../domain/interfaces';

import { getContactContractsUsecase } from '../../application/usecases/get-contact-contracts.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

export const getContactContractsQuery = async (
  query: GetContactContractsRequest,
): Promise<GetContactContractsResponse> => {
  return await getContactContractsUsecase(httpChatRepository, query);
};
