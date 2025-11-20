// TODO: Debo posterior colocar cada metodo como si fuese un servicio en su archivo por separado

import type {
  GetChatMessagesRequest,
  GetChatMessagesResponse,
  GetContactsRequest,
  GetContactsResponse,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories/chat.repository';
import type {
  GetChatMessagesResponseDTO,
  GetContactsResponseDTO,
} from '../dtos';

import { HttpCaches } from '@http-client/enums/http-caches.enum';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkFetchApiClient } from '@ui-core/fetchers/gnetwork-fetch-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { GetChatMessagesMapper } from '../mappers/get-chat-messages.mapper';
import { GetContactsMapper } from '../mappers/get-contacts.mapper';

export const httpChatRepository: ChatRepository = {
  getChatMessages: async (
    request: GetChatMessagesRequest,
  ): Promise<GetChatMessagesResponse> => {
    const requestDto = GetChatMessagesMapper.mapTo(request);

    const response =
      await gnetworkFetchApiClient.get<GetChatMessagesResponseDTO>(
        CHAT_RESOURCES.GET_CHAT_MESSAGES(requestDto?.contact_id),
        {
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
  },
  getContacts: async (
    query?: GetContactsRequest,
  ): Promise<GetContactsResponse> => {
    const response = await gnetworkFetchApiClient.get<GetContactsResponseDTO>(
      CHAT_RESOURCES.GET_CONTACTS,
      {
        cache: HttpCaches.NO_STORE,
        searchParams: {
          ...(query || {}),
        },
      },
    );

    if (response?.error || !response?.results) {
      throw new BaseException({
        message: response?.error,
        status: response?.status,
      });
    }

    return GetContactsMapper.mapFrom(response);
  },
};
