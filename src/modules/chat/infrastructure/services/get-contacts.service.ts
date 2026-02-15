import type {
  GetContactsRequest,
  GetContactsResponse,
} from '../../domain/interfaces';
import type { GetContactsResponseDTO } from '../dtos';

import { HttpCaches } from '@http-client/enums/http-caches.enum';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkFetchApiClient } from '@ui-core/fetchers/gnetwork-fetch-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';
import { CHAT_TAGS } from '../dictionaries/chat-tags.dictionary';

import { GetContactsMapper } from '../mappers/get-contacts.mapper';

/**
 * @name getContactsService
 *
 * @description This service gets the contacts.
 *
 * @param {GetContactsRequest} request - The request object
 *
 * @returns {Promise<GetContactsResponse>} The response object
 *
 * TODO: Put gnetworkFetchApiClient to core module not ui
 */
export const getContactsService = async (
  request?: GetContactsRequest,
): Promise<GetContactsResponse> => {
  const requestDto = GetContactsMapper.mapTo(request);

  const response = await gnetworkFetchApiClient.get<GetContactsResponseDTO>(
    CHAT_RESOURCES.GET_CONTACTS,
    {
      cache: HttpCaches.NO_STORE,
      next: {
        tags: [CHAT_TAGS.GET_CHAT_CONTACTS],
        revalidate: 0,
      },
      searchParams: {
        ...requestDto,
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
