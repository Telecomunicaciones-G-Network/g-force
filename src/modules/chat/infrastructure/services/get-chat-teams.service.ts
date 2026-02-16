import type { GetChatTeamsResponse } from '../../domain/interfaces';
import type { GetChatTeamsResponseDTO } from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { GetChatTeamsMapper } from '../mappers/get-chat-teams.mapper';

export const getChatTeamsService = async (): Promise<GetChatTeamsResponse> => {
  const response = await gnetworkAxiosApiClient.get<GetChatTeamsResponseDTO>(
    CHAT_RESOURCES.GET_CHAT_TEAMS,
  );

  if (response?.error || !response?.success || !response?.results) {
    throw new BaseException({
      message:
        response?.error ??
        'Lo sentimos. Ha ocurrido un error al obtener los equipos.',
      status: response?.status,
    });
  }

  return GetChatTeamsMapper.mapFrom(response);
};
