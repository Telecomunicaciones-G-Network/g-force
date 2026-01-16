'use client';

import type { CreateTicketRequest } from '@module-ticket/domain/interfaces';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { z } from 'zod';

import { CreateTicketCommand } from '@module-ticket/infrastructure/commands/create-ticket.command';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

import { useToast } from '@gnetwork-ui/components/organisms/toasts/toast/toast.hook';

const createTicketFormSchema = z.object({
  contractId: z.string().min(1, 'El contrato es requerido'),
  department: z.string().min(1, 'El departamento es requerido'),
  issue: z.string().min(1, 'El asunto es requerido'),
  description: z.string().min(1, 'La descripción es requerida'),
});

export type CreateTicketFormData = z.infer<typeof createTicketFormSchema>;

const DEFAULT_VALUES: CreateTicketFormData = {
  contractId: '',
  department: '',
  issue: '',
  description: '',
};

interface UseChatCreateTicketModalProps {
  onClose: () => void;
}

export const useChatCreateTicketModal = ({
  onClose,
}: UseChatCreateTicketModalProps) => {
  const activeContact = useContactStore((state) => state.activeContact);
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTicketFormData>({
    defaultValues: DEFAULT_VALUES,
    mode: 'onSubmit',
    resolver: zodResolver(createTicketFormSchema),
    reValidateMode: 'onSubmit',
  });

  const { mutate: createTicket, isPending } = useMutation({
    mutationFn: async (data: CreateTicketFormData) => {
      const request: CreateTicketRequest = {
        contactId: activeContact?.id ?? '',
        contractId: Number(data.contractId),
        description: data.description,
        issue: data.issue,
      };
      return await CreateTicketCommand(request);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CHAT_TAGS.GET_CHAT_CONTACT_TICKETS],
      });
      setIsSuccess(true);
    },
    onError: () => {
      showToast('No se pudo crear el ticket. Intente nuevamente.');
    },
  });

  const onSubmit = handleSubmit((data) => {
    createTicket(data);
  });

  const handleClose = () => {
    reset();
    setIsSuccess(false);
    onClose();
  };

  return {
    control,
    errors,
    handleClose,
    isPending,
    isSuccess,
    onSubmit,
  };
};
