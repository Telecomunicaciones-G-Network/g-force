import { gnetworkFetchApiClient } from '@ui-core/fetchers/gnetwork-fetch-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';
import { BaseException } from '@/src/packages/http-client/exceptions/base.exception';

/**
 * Fetches audio media and returns a Blob URL for streaming playback.
 * Uses getBlob instead of getFile to return a blob: URL that supports
 * proper range requests required by the <audio> element.
 */
export const getChatAudioByIdService = async (
  mediaId: string,
): Promise<string> => {
  const response = await gnetworkFetchApiClient.getBlob(
    CHAT_RESOURCES.GET_CHAT_MEDIA_BY_ID(mediaId),
  );

  if (!response) {
    throw new BaseException({
      message: 'Failed to get chat audio',
      status: 500,
    });
  }

  return response;
};
