import { gnetworkFetchApiClient } from '@ui-core/fetchers/gnetwork-fetch-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';
import { BaseException } from '@/src/packages/http-client/exceptions/base.exception';

export const getChatMediaByIdService = async (
  mediaId: string,
): Promise<string> => {
  const response = await gnetworkFetchApiClient.getFile(
    CHAT_RESOURCES.GET_CHAT_MEDIA_BY_ID(mediaId),
  );

  if (!response) {
    throw new BaseException({
      message: 'Failed to get chat media',
      status: 500,
    });
  }

  return response;
};
