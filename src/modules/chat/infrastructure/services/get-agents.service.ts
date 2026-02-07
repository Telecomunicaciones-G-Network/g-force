import type {
  GetAgentsRequest,
  GetAgentsResponse,
} from '../../domain/interfaces';
import type { GetAgentsResponseDTO } from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { GetAgentsMapper } from '../mappers/get-agents.mapper';

/**
 * @name getAgentsService
 *
 * @description This service fetches the agents from the API.
 *
 * @param {GetAgentsRequest} request - The request object.
 *
 * @returns {Promise<GetAgentsResponse>} The response object.
 *
 * TODO: gnetworkAxiosApiClient must below to module core not ui
 */
export const getAgentsService = async (
  request: GetAgentsRequest,
): Promise<GetAgentsResponse> => {
  const requestDto = GetAgentsMapper.mapTo(request);

  const response = await gnetworkAxiosApiClient.get<GetAgentsResponseDTO>(
    CHAT_RESOURCES.GET_AGENTS,
    {
      searchParams: {
        ...requestDto,
      },
    },
  );

  if (!response?.results || !response?.success) {
    throw new BaseException({
      message: 'Lo sentimos. Ha ocurrido un error al obtener los agentes.',
      status: response?.status,
    });
  }

  return GetAgentsMapper.mapFrom(response);
};
