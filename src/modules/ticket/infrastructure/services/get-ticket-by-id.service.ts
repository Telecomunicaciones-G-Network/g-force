import type {
  GetTicketByIdRequest,
  GetTicketByIdResponse,
} from '../../domain/interfaces';
import type { GetTicketByIdResponseDTO } from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { TICKET_RESOURCES } from '../dictionaries/ticket-resources.dictionary';

import { GetTicketByIdMapper } from '../mappers/get-ticket-by-id.mapper';

export const getTicketByIdService = async (
  request: GetTicketByIdRequest,
): Promise<GetTicketByIdResponse> => {
  const response = await gnetworkAxiosApiClient.get<GetTicketByIdResponseDTO>(
    TICKET_RESOURCES.GET_TICKET_BY_ID(request?.ticketId),
  );

  if (!response?.results || !response?.success) {
    throw new BaseException({
      message: `Error al obtener el ticket con id: ${request?.ticketId}`,
      status: response?.status,
    });
  }

  return GetTicketByIdMapper.mapFrom(response);
};
