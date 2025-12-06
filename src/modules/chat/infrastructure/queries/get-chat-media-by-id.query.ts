import { getChatMediaByIdUsecase } from '../../application/usecases/get-chat-media-by-id.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

export const getChatMediaByIdQuery = async (
  mediaId: string,
): Promise<string> => {
  return await getChatMediaByIdUsecase(httpChatRepository, mediaId);
};
