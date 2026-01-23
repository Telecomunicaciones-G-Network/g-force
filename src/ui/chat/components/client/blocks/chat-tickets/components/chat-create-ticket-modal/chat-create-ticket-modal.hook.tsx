'use client';

import type { CreateTicketRequest } from '@module-ticket/domain/interfaces';
import type { ClientContract } from './components/client-search-dropdown/client-search-dropdown.hook';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { z } from 'zod';

import { CreateTicketCommand } from '@module-ticket/infrastructure/commands/create-ticket.command';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { useToast } from '@gnetwork-ui/components/organisms/toasts/toast/toast.hook';

import { getTicketsDepartmentsService } from '@module-ticket/infrastructure/services/get-tickets-departments.service';
import { getTicketsIssuesService } from '@module-ticket/infrastructure/services/get-tickets-issues.service';

const createTicketFormSchema = z.object({
  department: z.string().min(1, 'El departamento es requerido'),
  issue: z.string().min(1, 'El asunto es requerido'),
  description: z.string().min(1, 'La descripción es requerida'),
});

export type CreateTicketFormData = z.infer<typeof createTicketFormSchema>;

const DEFAULT_VALUES: CreateTicketFormData = {
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
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);
  const [selectedClientName, setSelectedClientName] = useState<string>('');
  const [selectedContractId, setSelectedContractId] = useState<number | null>(
    null,
  );
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [clientContracts, setClientContracts] = useState<ClientContract[]>([]);

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<CreateTicketFormData>({
    defaultValues: DEFAULT_VALUES,
    mode: 'onSubmit',
    resolver: zodResolver(createTicketFormSchema),
    reValidateMode: 'onSubmit',
  });

  // Fetch departments
  const { data: departmentsData, isLoading: isLoadingDepartments } = useQuery({
    queryKey: ['tickets-departments'],
    queryFn: getTicketsDepartmentsService,
  });

  // Fetch issues based on selected department
  const { data: issuesData, isLoading: isLoadingIssues } = useQuery({
    queryKey: ['tickets-issues', selectedDepartment],
    queryFn: async () => {
      if (!selectedDepartment) return [];
      return await getTicketsIssuesService({ department: selectedDepartment });
    },
    enabled: !!selectedDepartment,
  });

  const handleClientSelect = (
    clientId: string,
    clientName: string,
    contracts: ClientContract[],
  ) => {
    setSelectedClientId(clientId || null);
    setSelectedClientName(clientName);
    setClientContracts(contracts);
    setSelectedContractId(null);
  };

  const handleContractSelect = (contractId: number) => {
    setSelectedContractId(contractId);
  };

  const handleDepartmentChange = (departmentId: string) => {
    setSelectedDepartment(departmentId);
    setValue('issue', '');
  };

  const handleImageSelect = (files: FileList | null) => {
    if (!files) return;
    const newImages = Array.from(files).filter((file) =>
      file.type.startsWith('image/'),
    );
    setSelectedImages((prev) => [...prev, ...newImages]);
  };

  const handleRemoveImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const { mutate: createTicket, isPending } = useMutation({
    mutationFn: async (data: CreateTicketFormData) => {
      const request: CreateTicketRequest = {
        clientId: selectedClientId ?? '',
        assignedDepartmentId: Number(data.department),
        contractId: selectedContractId ?? 0,
        issueId: Number(data.issue),
        description: data.description,
        images: selectedImages.length > 0 ? selectedImages : undefined,
      };

      return await CreateTicketCommand(request);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CHAT_TAGS.GET_CHAT_CONTACT_TICKETS],
      });
      // setIsSuccess(true);

      // Mostrar toast de éxito
      showToast('Ticket Creado Satisfactoriamente', { scheme: 'success' });

      // Cerrar modal después de 2 segundos
      setTimeout(() => {
        handleClose();
      }, 1000);
    },
    onError: () => {
      showToast('No se pudo crear el ticket. Intente nuevamente.', {
        scheme: 'error',
      });
    },
  });

  const onSubmit = handleSubmit((data) => {
    createTicket(data);
  });

  const handleClose = () => {
    reset();
    setIsSuccess(false);
    setSelectedClientId(null);
    setSelectedClientName('');
    setSelectedContractId(null);
    setSelectedDepartment('');
    setSelectedImages([]);
    setClientContracts([]);
    onClose();
  };

  return {
    contracts: clientContracts,
    control,
    departments: departmentsData ?? [],
    errors,
    handleClientSelect,
    handleClose,
    handleContractSelect,
    handleDepartmentChange,
    handleImageSelect,
    handleRemoveImage,
    isPending,
    isLoadingDepartments,
    isLoadingIssues,
    isSuccess,
    issues: issuesData ?? [],
    onSubmit,
    selectedClientName,
    selectedContractId,
    selectedDepartment,
    selectedImages,
    setValue,
  };
};
