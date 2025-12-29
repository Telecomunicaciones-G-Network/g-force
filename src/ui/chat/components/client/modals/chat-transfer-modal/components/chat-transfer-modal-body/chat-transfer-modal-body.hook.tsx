'use client';

import type { GetChatTeamsResponse } from '@module-chat/domain/interfaces';

import { useQuery } from '@tanstack/react-query';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { GetChatTeamsQuery } from '@module-chat/infrastructure/queries/get-chat-teams.query';

export const useChatTransferModalBody = () => {
  const { data, isError, isLoading } = useQuery<GetChatTeamsResponse>({
    queryKey: [CHAT_TAGS.GET_CHAT_TEAMS],
    queryFn: () => GetChatTeamsQuery(),
    enabled: true,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return {
    teams: data?.teams ?? [],
    isError,
    isLoading,
  };
};
