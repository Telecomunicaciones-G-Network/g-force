'use client';

import type { GetChatTeamsResponse } from '@module-chat/domain/interfaces';

import { useQuery } from '@tanstack/react-query';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { GetChatTeamsQuery } from '@module-chat/infrastructure/queries/get-chat-teams.query';

/**
 * @name useGetChatTeamsQuery
 *
 * @description Hook to get the teams from the API.
 *
 * @returns data - The teams data.
 */
export const useGetChatTeamsQuery = () => {
  const { data, isError, isLoading } = useQuery<GetChatTeamsResponse>({
    queryKey: [CHAT_TAGS.GET_CHAT_TEAMS],
    queryFn: () => GetChatTeamsQuery(),
  });

  return {
    data,
    isError,
    isLoading,
  };
};
