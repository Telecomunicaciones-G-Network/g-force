import type { GetChatTeamsResponse } from '../../domain/interfaces';

import { getChatTeamsUsecase } from '../../application/usecases/get-chat-teams.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

export const GetChatTeamsQuery = async (): Promise<GetChatTeamsResponse> => {
  return await getChatTeamsUsecase(httpChatRepository);
};
