import type { GetChatTeamsResponse } from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { BaseException } from '@http-client/exceptions/base.exception';

import { GetChatTeamsException } from '../../domain/exceptions/get-chat-teams.exception';

export const getChatTeamsUsecase = async (
  chatRepository: ChatRepository,
): Promise<GetChatTeamsResponse> => {
  return await chatRepository
    .getChatTeams()
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new GetChatTeamsException({
        message: error?.message,
        status: error?.status,
      });
    });
};
