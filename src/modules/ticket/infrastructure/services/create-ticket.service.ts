import type {
  CreateTicketRequest,
  CreateTicketResponse,
} from '../../domain/interfaces';
import type { CreateTicketRequestDTO, CreateTicketResponseDTO } from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { TICKET_RESOURCES } from '../dictionaries/ticket-resources.dictionary';

import { CreateTicketMapper } from '../mappers/create-ticket.mapper';

export const createTicketService = async (
  request: CreateTicketRequest,
): Promise<CreateTicketResponse> => {
  const requestDto = CreateTicketMapper.mapTo(request);

  const response = await gnetworkAxiosApiClient.post<
    CreateTicketRequestDTO,
    CreateTicketResponseDTO
  >(TICKET_RESOURCES.CREATE_TICKET, requestDto);

  if (!response?.results || !response?.success) {
    throw new BaseException({
      message: 'Error al crear el ticket',
      status: response?.status,
    });
  }

  return CreateTicketMapper.mapFrom(response);
};
