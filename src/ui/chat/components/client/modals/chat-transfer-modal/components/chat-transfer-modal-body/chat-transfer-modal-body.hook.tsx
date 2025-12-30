'use client';

import type { GetChatTeamsResponse } from '@module-chat/domain/interfaces';
import type { TeamCodename } from '@module-chat/domain/types';
import type { TransferChatFormData } from './types';

import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { GetChatTeamsQuery } from '@module-chat/infrastructure/queries/get-chat-teams.query';
import { GetChatTransferAgentsQuery } from '@module-chat/infrastructure/queries/get-chat-transfer-agents.query';

import { CHAT_TRANSFER_FORM_DEFAULT_VALUES } from './constants/chat-transfer-form.constant';

import { transferChatFormSchema } from './schemas/chat-transfer-modal-form.schema';

export const useChatTransferModalBody = () => {
  const {
    clearErrors: clearErrorsForm,
    control,
    handleSubmit,
    setValue,
    watch,
  } = useForm<TransferChatFormData>({
    defaultValues: CHAT_TRANSFER_FORM_DEFAULT_VALUES,
    mode: 'onSubmit',
    resolver: zodResolver(transferChatFormSchema),
    reValidateMode: 'onSubmit',
  });

  const teamInput = watch('team');

  const {
    data: teamsData,
    isError: isTeamsError,
    isLoading: isTeamsLoading,
  } = useQuery<GetChatTeamsResponse>({
    queryKey: [CHAT_TAGS.GET_CHAT_TEAMS],
    queryFn: () => GetChatTeamsQuery(),
    enabled: true,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const {
    data: agentsData,
    isError: isAgentsError,
    isLoading: isAgentsLoading,
  } = useQuery({
    queryKey: [
      CHAT_TAGS.GET_CHAT_TRANSFER_AGENTS,
      {
        limit: 20,
        page: 1,
        teamCodename: teamInput as TeamCodename,
      },
    ],
    queryFn: () =>
      GetChatTransferAgentsQuery({
        limit: 20,
        page: 1,
        teamCodename: teamInput as TeamCodename,
      }),
    enabled: !!teamInput,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const clearErrors = (
    fieldName?: keyof TransferChatFormData | (keyof TransferChatFormData)[],
  ) => {
    clearErrorsForm(fieldName);
  };

  const onSubmit = (data: TransferChatFormData) => console.log(data);

  useEffect(() => {
    if (teamInput) {
      setValue('agent', '');
    }
  }, [setValue, teamInput]);

  return {
    agents: agentsData?.agents ?? [],
    clearErrors,
    control,
    handleSubmit,
    isError: isAgentsError || isTeamsError,
    isAgentsLoading,
    isTeamsLoading,
    onSubmit,
    teamInput,
    teams: teamsData?.teams ?? [],
  };
};
