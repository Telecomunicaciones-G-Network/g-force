import type {
  GetContactContractsRequest,
  GetContactContractsResponse,
} from '../../domain/interfaces';
import type { GetContactContractsResponseDTO } from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { GetContactContractsMapper } from '../mappers/get-contact-contracts.mapper';

/**
 * @name getContactContractsService
 *
 * @description This service gets the contracts for a contact.
 *
 * @param {GetContactContractsRequest} request - The request object
 *
 * @returns {Promise<GetContactContractsResponse>} The response object
 */
export const getContactContractsService = async (
  request: GetContactContractsRequest,
): Promise<GetContactContractsResponse> => {
  if (!request?.contactId) {
    throw new BaseException({
      message: 'El contactId es requerido',
      status: 400,
    });
  }

  const requestDto = GetContactContractsMapper.mapTo(request);

  const response =
    await gnetworkAxiosApiClient.get<GetContactContractsResponseDTO>(
      CHAT_RESOURCES.GET_CONTACT_CONTRACTS(request?.contactId),
      {
        searchParams: {
          ...requestDto,
        },
      },
    );

  if (!response?.results || !response?.success) {
    throw new BaseException({
      message: `Error al obtener los contratos del contacto con id: ${request?.contactId}`,
      status: response?.status,
    });
  }

  return GetContactContractsMapper.mapFrom(response);
};
