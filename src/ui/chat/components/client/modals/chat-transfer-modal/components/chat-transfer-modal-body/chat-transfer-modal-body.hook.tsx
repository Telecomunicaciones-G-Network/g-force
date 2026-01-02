'use client';

import type { GetChatTeamsResponse } from '@module-chat/domain/interfaces';
import type { TeamCodename } from '@module-chat/domain/types';
import type { TransferChatFormData } from './types';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { transferChatConversationCommand } from '@module-chat/infrastructure/commands/transfer-chat-conversation.command';
import { GetChatTeamsQuery } from '@module-chat/infrastructure/queries/get-chat-teams.query';
import { GetChatTransferAgentsQuery } from '@module-chat/infrastructure/queries/get-chat-transfer-agents.query';

import { revalidateChatContactsAction } from '@ui-chat/actions/revalidate-chat-contacts.action';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

import { CHAT_TRANSFER_FORM_DEFAULT_VALUES } from './constants/chat-transfer-form.constant';

import { transferChatFormSchema } from './schemas/chat-transfer-modal-form.schema';

interface UseChatTransferModalBodyProps {
  onClose: () => void;
}

export const useChatTransferModalBody = ({
  onClose,
}: Readonly<UseChatTransferModalBodyProps>) => {
  const router = useRouter();

  const activeContact = useContactStore((state) => state.activeContact);

  const setActiveContact = useContactStore((state) => state.setActiveContact);
  const setChatMode = useContactStore((state) => state.setChatMode);

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

  const { isPending: isChatTransferConversationPending, mutate: transferChat } =
    useMutation({
      mutationFn: transferChatConversationCommand,
      onSuccess: async () => {
        onClose();
        setActiveContact(null);
        setChatMode(ChatModes.LIST);

        await revalidateChatContactsAction();

        router.refresh();
      },
      onError: (error) => {
        console.log('error', error);
      },
    });

  const clearErrors = (
    fieldName?: keyof TransferChatFormData | (keyof TransferChatFormData)[],
  ) => {
    clearErrorsForm(fieldName);
  };

  const onSubmit = (data: TransferChatFormData) => {
    if (!activeContact?.id) return;

    transferChat({
      agentId: data?.agent || undefined,
      contactId: activeContact.id,
      teamCodename: data?.team as TeamCodename,
    });
  };

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
    isChatTransferConversationPending,
    isTeamsLoading,
    onSubmit,
    teamInput,
    teams: teamsData?.teams ?? [],
  };
};
