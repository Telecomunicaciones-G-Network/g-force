import type {
  GetContactNotesRequest,
  GetContactNotesResponse,
} from '../../domain/interfaces';
import type { GetContactNotesResponseDTO } from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { GetContactNotesMapper } from '../mappers/get-contact-notes.mapper';

export const getContactNotesService = async (
  request: GetContactNotesRequest,
): Promise<GetContactNotesResponse> => {
  const response = await gnetworkAxiosApiClient.get<GetContactNotesResponseDTO>(
    CHAT_RESOURCES.GET_CONTACT_NOTES(request?.contactId),
    {
      searchParams: {
        cursor: request?.page,
        limit: request?.limit?.toString() ?? '20',
      },
    },
  );

  if (response?.error || !response?.results || !response?.success) {
    throw new BaseException({
      message: response?.error,
      status: response?.status,
    });
  }

  return GetContactNotesMapper.mapFrom(response);
};
