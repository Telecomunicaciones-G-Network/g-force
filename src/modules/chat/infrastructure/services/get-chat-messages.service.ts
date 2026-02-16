import type {
  GetChatMessagesRequest,
  GetChatMessagesResponse,
} from '../../domain/interfaces';
import type { GetChatMessagesResponseDTO } from '../dtos';

import { HttpCaches } from '@http-client/enums/http-caches.enum';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkFetchApiClient } from '@ui-core/fetchers/gnetwork-fetch-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { GetChatMessagesMapper } from '../mappers/get-chat-messages.mapper';

export const getChatMessagesService = async (
  request: GetChatMessagesRequest,
): Promise<GetChatMessagesResponse> => {
  const requestDto = GetChatMessagesMapper.mapTo(request);

  const response = await gnetworkFetchApiClient.get<GetChatMessagesResponseDTO>(
    CHAT_RESOURCES.GET_CHAT_MESSAGES(requestDto?.contact_id),
    {
      cache: HttpCaches.NO_STORE,
      searchParams: {
        cursor: requestDto?.cursor,
        limit: requestDto?.limit?.toString(),
      },
    },
  );

  if (response?.error || !response?.results) {
    throw new BaseException({
      message: response?.error,
      status: response?.status,
    });
  }

  return GetChatMessagesMapper.mapFrom(response);
};
