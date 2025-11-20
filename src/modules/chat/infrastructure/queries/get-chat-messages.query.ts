// DONE:

import type { GetChatMessagesRequest } from '../../domain/interfaces';
import type { GetChatMessagesViewModel } from '../viewmodels';

import { getChatMessagesUsecase } from '../../application/usecases/get-chat-messages.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

import { getChatMessagesPresenter } from '../presenters/get-chat-messages.presenter';

export const GetChatMessagesQuery = async (
  query: GetChatMessagesRequest,
): Promise<GetChatMessagesViewModel> => {
  const response = await getChatMessagesUsecase(httpChatRepository, query);

  return getChatMessagesPresenter(response);
};
