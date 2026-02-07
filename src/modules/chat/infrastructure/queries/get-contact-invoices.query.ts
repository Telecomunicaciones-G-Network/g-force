import type {
  GetContactInvoicesRequest,
  GetContactInvoicesResponse,
} from '../../domain/interfaces';

import { getContactInvoicesUsecase } from '../../application/usecases/get-contact-invoices.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

export const GetContactInvoicesQuery = async (
  request: GetContactInvoicesRequest,
): Promise<GetContactInvoicesResponse> => {
  return await getContactInvoicesUsecase(httpChatRepository, request);
};
