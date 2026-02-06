'use client';

import type {
  GetAgentsRequest,
  GetAgentsResponse,
} from '@module-chat/domain/interfaces';

import { useQuery } from '@tanstack/react-query';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { GetAgentsQuery } from '@module-chat/infrastructure/queries/get-agents.query';

/**
 * @name useGetAgentsQuery
 *
 * @description Hook to get the agents from the API.
 *
 * @param {GetAgentsRequest} query - The query parameters.
 *
 * @returns data - The agents data.
 */
export const useGetAgentsQuery = (query: GetAgentsRequest) => {
  const { data, isError, isLoading } = useQuery<GetAgentsResponse>({
    queryKey: [
      CHAT_TAGS.GET_AGENTS,
      {
        page: query?.page,
        page_size: query?.limit,
        search: query?.search,
      },
    ],
    queryFn: () =>
      GetAgentsQuery({
        limit: query?.limit,
        page: query?.page,
        search: query?.search,
      }),
  });

  return {
    data,
    isError,
    isLoading,
  };
};
