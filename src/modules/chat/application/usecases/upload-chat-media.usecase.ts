import type {
  UploadChatMediaRequest,
  UploadChatMediaResponse,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { BaseException } from '@http-client/exceptions/base.exception';

import { UploadChatMediaException } from '../../domain/exceptions/upload-chat-media.exception';

export const UploadChatMediaUsecase = async (
  httpChatRepository: ChatRepository,
  request: UploadChatMediaRequest,
): Promise<UploadChatMediaResponse> => {
  return httpChatRepository
    .uploadChatMedia(request)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new UploadChatMediaException({
        status: error?.status,
      });
    });
};
