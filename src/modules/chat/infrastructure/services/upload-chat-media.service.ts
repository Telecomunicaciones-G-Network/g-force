import type {
  UploadChatMediaRequest,
  UploadChatMediaResponse,
} from '../../domain/interfaces';
import type { UploadChatMediaResponseDTO } from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { UploadChatMediaMapper } from '../mappers/upload-chat-media.mapper';

export const uploadChatMediaService = async (
  request: UploadChatMediaRequest,
): Promise<UploadChatMediaResponse> => {
  const response =
    await gnetworkAxiosApiClient.uploadFile<UploadChatMediaResponseDTO>(
      CHAT_RESOURCES.UPLOAD_CHAT_MEDIA,
      request,
    );

  if (response?.error || !response?.results) {
    throw new BaseException({
      message: response?.error,
      status: response?.status,
    });
  }

  return UploadChatMediaMapper.mapFrom(response);
};
