import type {
  GetContactsRequest,
  GetContactsResponse,
} from '../../domain/interfaces';
import type { GetContactsResponseDTO } from '../dtos';

import { HttpCaches } from '@http-client/enums/http-caches.enum';

import { BaseException } from '@packages/http-client/exceptions/base.exception';

import { gnetworkFetchApiClient } from '@ui-core/fetchers/gnetwork-fetch-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { GetContactsMapper } from '../mappers/get-contacts.mapper';

export const getContactsService = async (
  request?: GetContactsRequest,
): Promise<GetContactsResponse> => {
  const response = await gnetworkFetchApiClient.get<GetContactsResponseDTO>(
    CHAT_RESOURCES.GET_CONTACTS,
    {
      cache: HttpCaches.NO_STORE,
      next: {
        tags: ['get-chat-contacts'],
      },
      searchParams: {
        ...(request || {}),
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
