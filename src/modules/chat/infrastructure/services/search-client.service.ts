import type {
  GetContactsRequest,
  GetContactsResponse,
} from '../../domain/interfaces';
import type { GetContactsResponseDTO } from '../dtos';

import { DEFAULT_LIMIT_PARAM } from '@http-client/constants/default-limit-param.constant';

import { HttpCaches } from '@http-client/enums/http-caches.enum';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkFetchApiClient } from '@ui-core/fetchers/gnetwork-fetch-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';
import { CHAT_TAGS } from '../dictionaries/chat-tags.dictionary';

import { GetContactsMapper } from '../mappers/get-contacts.mapper';

export const searchClientService = async (
  request?: GetContactsRequest,
): Promise<GetContactsResponse> => {
  const response = await gnetworkFetchApiClient.get<GetContactsResponseDTO>(
    CHAT_RESOURCES.SEARCH_CLIENT,
    {
      cache: HttpCaches.NO_STORE,
      next: {
        tags: [CHAT_TAGS.GET_CHAT_CONTACTS],
        revalidate: 0,
      },
      searchParams: {
        ...request,
        limit: request?.limit ?? DEFAULT_LIMIT_PARAM,
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
};
