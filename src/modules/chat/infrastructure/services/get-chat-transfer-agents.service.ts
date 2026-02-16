import type {
  GetChatTransferAgentsRequest,
  GetChatTransferAgentsResponse,
} from '../../domain/interfaces';
import type { GetChatTransferAgentsResponseDTO } from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { GetChatTransferAgentsMapper } from '../mappers/get-chat-transfer-agents.mapper';

export const getChatTransferAgentsService = async (
  request?: GetChatTransferAgentsRequest,
): Promise<GetChatTransferAgentsResponse> => {
  const parsedRequest = GetChatTransferAgentsMapper.mapTo(request);

  const response =
    await gnetworkAxiosApiClient.get<GetChatTransferAgentsResponseDTO>(
      CHAT_RESOURCES.GET_CHAT_TRANSFER_AGENTS,
      {
        searchParams: {
          is_bot: parsedRequest?.is_bot?.toString(),
          page_size: parsedRequest?.page_size?.toString(),
          page: parsedRequest?.page?.toString(),
          search: parsedRequest?.search,
          status: parsedRequest?.status,
          team_codename: parsedRequest?.team_codename,
        },
      },
    );

  if (response?.error || !response?.success || !response?.results) {
    throw new BaseException({
      message:
        response?.error ??
        'Lo sentimos. Ha ocurrido un error al obtener los agentes.',
      status: response?.status,
    });
  }

  return GetChatTransferAgentsMapper.mapFrom(response);
};
