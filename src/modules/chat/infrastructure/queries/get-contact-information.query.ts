import type { GetContactInformationResponse } from '../../domain/interfaces';

import { getContactInformationUsecase } from '../../application/usecases/get-contact-information.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

export const GetContactInformationQuery = async (
  contactId: string,
): Promise<GetContactInformationResponse> => {
  return await getContactInformationUsecase(httpChatRepository, contactId);
};
