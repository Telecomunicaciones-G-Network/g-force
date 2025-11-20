// DONE:

import type {
  GetChatMessagesRequest,
  GetChatMessagesResponse,
} from '../../domain/interfaces';

import { getChatMessagesUsecase } from '../../application/usecases/get-chat-messages.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

export const GetChatMessagesQuery = async (
  query: GetChatMessagesRequest,
): Promise<GetChatMessagesResponse> => {
  return await getChatMessagesUsecase(httpChatRepository, query);
};
