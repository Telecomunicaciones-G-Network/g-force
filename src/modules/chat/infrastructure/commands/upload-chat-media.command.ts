import type {
  UploadChatMediaRequest,
  UploadChatMediaResponse,
} from '../../domain/interfaces';

import { UploadChatMediaUsecase } from '../../application/usecases/upload-chat-media.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

export const uploadChatMediaCommand = async (
  command: UploadChatMediaRequest,
): Promise<UploadChatMediaResponse> => {
  return await UploadChatMediaUsecase(httpChatRepository, command);
};
