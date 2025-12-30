'use client';

import type { GetChatTeamsResponse } from '@module-chat/domain/interfaces';
import type { TransferChatFormData } from './types';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { GetChatTeamsQuery } from '@module-chat/infrastructure/queries/get-chat-teams.query';

import { CHAT_TRANSFER_FORM_DEFAULT_VALUES } from './constants/chat-transfer-form.constant';

import { transferChatFormSchema } from './schemas/chat-transfer-modal-form.schema';

export const useChatTransferModalBody = () => {
  const {
    clearErrors: clearErrorsForm,
    control,
    handleSubmit,
    watch,
  } = useForm<TransferChatFormData>({
    defaultValues: CHAT_TRANSFER_FORM_DEFAULT_VALUES,
    mode: 'onSubmit',
    resolver: zodResolver(transferChatFormSchema),
    reValidateMode: 'onSubmit',
  });

  const { data, isError, isLoading } = useQuery<GetChatTeamsResponse>({
    queryKey: [CHAT_TAGS.GET_CHAT_TEAMS],
    queryFn: () => GetChatTeamsQuery(),
    enabled: true,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const teamInput = watch('team');

  const clearErrors = (
    fieldName?: keyof TransferChatFormData | (keyof TransferChatFormData)[],
  ) => {
    clearErrorsForm(fieldName);
  };

  const onSubmit = (data: TransferChatFormData) => console.log(data);

  return {
    clearErrors,
    control,
    handleSubmit,
    isError,
    isLoading,
    onSubmit,
    teams: data?.teams ?? [],
    teamInput,
  };
};
