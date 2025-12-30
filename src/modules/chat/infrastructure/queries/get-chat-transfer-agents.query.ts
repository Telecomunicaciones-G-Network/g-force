import type {
  GetChatTransferAgentsRequest,
  GetChatTransferAgentsResponse,
} from '../../domain/interfaces';

import { getChatTransferAgentsUsecase } from '../../application/usecases/get-chat-transfer-agents.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

export const GetChatTransferAgentsQuery = async (
  query?: GetChatTransferAgentsRequest,
): Promise<GetChatTransferAgentsResponse> => {
  return await getChatTransferAgentsUsecase(httpChatRepository, query);
};
