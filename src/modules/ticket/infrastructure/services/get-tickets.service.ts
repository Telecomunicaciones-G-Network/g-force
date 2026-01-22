import type {
  GetTicketsRequest,
  GetTicketsResponse,
} from '../../domain/interfaces';
import type { GetTicketsResponseDTO } from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { TICKET_RESOURCES } from '../dictionaries/ticket-resources.dictionary';

import { GetTicketsMapper } from '../mappers/get-tickets.mapper';

export const getTicketsService = async (
  request: GetTicketsRequest,
): Promise<GetTicketsResponse> => {
  const requestDto = GetTicketsMapper.mapTo(request);

  if (!requestDto?.contact_id) {
    throw new BaseException({
      message: 'El contact_id es requerido para obtener los tickets',
      status: 400,
    });
  }

  const response = await gnetworkAxiosApiClient.get<GetTicketsResponseDTO>(
    TICKET_RESOURCES.GET_TICKETS(requestDto.contact_id),
    {
      searchParams: {
        page_size: requestDto?.page_size?.toString() ?? '20',
        page: requestDto?.page?.toString() ?? '1',
        status: requestDto?.status,
      },
    },
  );

  if (!response?.results || !response?.success) {
    throw new BaseException({
      message: 'Error al obtener los tickets',
      status: response?.status,
    });
  }

  return GetTicketsMapper.mapFrom(response);
};
