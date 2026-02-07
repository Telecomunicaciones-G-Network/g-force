import type {
  GetChatTransferAgentsRequest,
  GetChatTransferAgentsResponse,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { BaseException } from '@http-client/exceptions/base.exception';

import { GetChatTransferAgentsException } from '../../domain/exceptions/get-chat-transfer-agents.exception';

export const getChatTransferAgentsUsecase = async (
  chatRepository: ChatRepository,
  request?: GetChatTransferAgentsRequest,
): Promise<GetChatTransferAgentsResponse> => {
  return await chatRepository
    .getChatTransferAgents(request)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new GetChatTransferAgentsException({
        status: error?.status,
      });
    });
};
