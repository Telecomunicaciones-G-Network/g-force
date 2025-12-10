import type {
  GetContactTicketsRequest,
  GetContactTicketsResponse,
} from '../../domain/interfaces';
import type { GetContactTicketsResponseDTO } from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { GetContactTicketsMapper } from '../mappers/get-contact-tickets.mapper';

export const getContactTicketsService = async (
  request: GetContactTicketsRequest,
): Promise<GetContactTicketsResponse> => {
  const response =
    await gnetworkAxiosApiClient.get<GetContactTicketsResponseDTO>(
      CHAT_RESOURCES.GET_CONTACT_TICKETS(request?.contactId),
      {
        searchParams: {
          page_size: request?.limit?.toString() ?? '20',
          page: request?.page?.toString() ?? '1',
        },
      },
    );

  if (response?.error || !response?.results || !response?.success) {
    throw new BaseException({
      message:
        response?.error ??
        `Error al obtener los tickets del contacto con id: ${request?.contactId}`,
      status: response?.status,
    });
  }

  return GetContactTicketsMapper.mapFrom(response);
};
