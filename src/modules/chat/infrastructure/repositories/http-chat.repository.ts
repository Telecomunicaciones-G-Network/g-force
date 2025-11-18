import type {
  GetContactsMappedResponse,
  GetContactsRequest,
  GetContactsResponse,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories/chat.repository';

import { HttpCaches } from '@http-client/enums/http-caches.enum';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkFetchApiClient } from '@ui-core/fetchers/gnetwork-fetch-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { getContactsMapper } from '../mappers/get-contacts.mapper';

export const httpChatRepository: ChatRepository = {
  getContacts: async (
    query?: GetContactsRequest,
  ): Promise<GetContactsMappedResponse> => {
    const response = await gnetworkFetchApiClient.get<GetContactsResponse>(
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

    return getContactsMapper(response);
  },
};
