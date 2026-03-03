import type {
  GetTeamSharedMediaRequest,
  GetTeamSharedMediaResponse,
} from '../../domain/interfaces';
import type { GetTeamSharedMediaResponseDTO } from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

export const getTeamSharedMediaService = async (
  request: GetTeamSharedMediaRequest,
): Promise<GetTeamSharedMediaResponse> => {
  const params = new URLSearchParams();

  if (request.search) params.set('search', request.search);
  if (request.cursor) params.set('cursor', request.cursor);
  if (request.limit) params.set('limit', String(request.limit));

  const url = `${CHAT_RESOURCES.GET_TEAM_SHARED_MEDIA(request.teamCodename)}${params.toString() ? `?${params.toString()}` : ''}`;

  const response =
    await gnetworkAxiosApiClient.get<GetTeamSharedMediaResponseDTO>(url);

  if (response?.error || !response?.results) {
    throw new BaseException({
      message: response?.error,
      status: response?.status,
    });
  }

  return {
    error: response?.error,
    hasMore: response.has_more,
    nextCursor: response.next_cursor,
    results: (response.results ?? []).map((item) => ({
      id: item.id,
      type: item.type,
      mimeType: item.mime_type,
      storageBucket: item.storage_bucket,
      storagePath: item.storage_path,
      storageStatus: item.storage_status,
    })),
    status: response.status,
    success: response.success,
  };
};
