import type { ChatRepository } from '../../domain/repositories';

import { BaseException } from '@http-client/exceptions/base.exception';

import { GetChatMediaByIdException } from '../../domain/exceptions/get-chat-media-by-id.exception';

export const getChatMediaByIdUsecase = async (
  httpChatRepository: ChatRepository,
  mediaId: string,
): Promise<string> => {
  return httpChatRepository
    .getChatMediaById(mediaId)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new GetChatMediaByIdException({
        mediaId: mediaId,
        status: error?.status,
      });
    });
};
