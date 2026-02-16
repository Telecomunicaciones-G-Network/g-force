'use client';

import type { GetChatTeamsResponse } from '@module-chat/domain/interfaces';
import type { TeamCodename } from '@module-chat/domain/types';
import type { ChatTransferConversationFormData } from './types';

import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { useToast } from '@gnetwork-ui/components/organisms/toasts/toast/toast.hook';

import { transferChatConversationCommand } from '@module-chat/infrastructure/commands/transfer-chat-conversation.command';
import { GetChatTeamsQuery } from '@module-chat/infrastructure/queries/get-chat-teams.query';
import { GetChatTransferAgentsQuery } from '@module-chat/infrastructure/queries/get-chat-transfer-agents.query';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

import { CHAT_TRANSFER_CONVERSATION_FORM_DEFAULT_VALUES } from './constants/chat-transfer-conversation-form-default-values.constant';

import { transferChatConversationFormSchema } from './schemas/chat-transfer-conversation-modal-form.schema';

interface UseChatTransferConversationModalBodyProps {
  onClose: VoidFunction;
}

export const useChatTransferConversationModalBody = ({
  onClose,
}: Readonly<UseChatTransferConversationModalBodyProps>) => {
  const activeContact = useContactStore((state) => state.activeContact);

  const setActiveContact = useContactStore((state) => state.setActiveContact);
  const setChatMode = useContactStore((state) => state.setChatMode);

  const deleteOneContactById = useContactStore(
    (state) => state.deleteOneContactById,
  );

  const { showToast } = useToast();

  const {
    clearErrors: clearErrorsForm,
    control,
    handleSubmit,
    setValue,
    watch,
  } = useForm<ChatTransferConversationFormData>({
    defaultValues: CHAT_TRANSFER_CONVERSATION_FORM_DEFAULT_VALUES,
    mode: 'onSubmit',
    resolver: zodResolver(transferChatConversationFormSchema),
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
        if (!activeContact?.id) return;

        onClose();
        deleteOneContactById(activeContact?.id);
        setActiveContact(null);
        setChatMode(ChatModes.LIST);
      },
      onError: (error) => {
        showToast(error?.message ?? 'Error al transferir la conversación', {
          id: 'chat-transfer-modal-toast',
          position: 'top-right',
        });
      },
    });

  const clearErrors = (
    fieldName?:
      | keyof ChatTransferConversationFormData
      | (keyof ChatTransferConversationFormData)[],
  ) => {
    clearErrorsForm(fieldName);
  };

  const onSubmit = (data: ChatTransferConversationFormData) => {
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
