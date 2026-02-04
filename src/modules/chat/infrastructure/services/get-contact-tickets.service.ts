import type {
  GetContactTicketsRequest,
  GetContactTicketsResponse,
} from '../../domain/interfaces';
import type { GetContactTicketsResponseDTO } from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { GetContactTicketsMapper } from '../mappers/get-contact-tickets.mapper';

/**
 * @name getContactTicketsService
 *
 * @description This service gets the tickets for a contact.
 *
 * @param {GetContactTicketsRequest} request - The request object
 *
 * @returns {Promise<GetContactTicketsResponse>} The response object
 *
 * TODO: I need to change the handler of BaseException this by BadRequestException or apply DTO Validation
 * using class-validator
 */
export const getContactTicketsService = async (
  request: GetContactTicketsRequest,
): Promise<GetContactTicketsResponse> => {
  if (!request?.contactId) {
    throw new BaseException({
      message:
        'La propiedad contactId es requerida y no esta siendo proporcionada en la solicitud.',
      status: 400,
    });
  }

  const requestDto = GetContactTicketsMapper.mapTo(request);

  const response =
    await gnetworkAxiosApiClient.get<GetContactTicketsResponseDTO>(
      CHAT_RESOURCES.GET_CONTACT_TICKETS(request?.contactId),
      {
        searchParams: {
          ...requestDto,
        },
      },
    );

  if (!response?.results || !response?.success) {
    throw new BaseException({
      message: `Error al obtener los tickets del contacto con id: ${request?.contactId}`,
      status: response?.status,
    });
  }

  return GetContactTicketsMapper.mapFrom(response);
};
