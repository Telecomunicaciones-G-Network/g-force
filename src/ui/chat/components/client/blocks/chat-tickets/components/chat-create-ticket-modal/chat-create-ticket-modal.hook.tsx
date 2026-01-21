'use client';

import type { CreateTicketRequest } from '@module-ticket/domain/interfaces';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { z } from 'zod';

import { CreateTicketCommand } from '@module-ticket/infrastructure/commands/create-ticket.command';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

import { useToast } from '@gnetwork-ui/components/organisms/toasts/toast/toast.hook';

import { getContactContractsService } from '@module-chat/infrastructure/services/get-contact-contracts.service';
import { getTicketsDepartmentsService } from '@module-ticket/infrastructure/services/get-tickets-departments.service';
import { getTicketsIssuesService } from '@module-ticket/infrastructure/services/get-tickets-issues.service';

import type { Department } from '@module-ticket/infrastructure/services/get-tickets-departments.service';
import type { Issue } from '@module-ticket/infrastructure/services/get-tickets-issues.service';

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
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);
  const [selectedClientName, setSelectedClientName] = useState<string>('');
  const [selectedContractId, setSelectedContractId] = useState<number | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

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

  // Fetch contracts when a client is selected
  const { data: contractsData, isLoading: isLoadingContracts } = useQuery({
    queryKey: ['client-contracts', selectedClientId],
    queryFn: async () => {
      if (!selectedClientId) return { contracts: [] };
      return await getContactContractsService({
        contactId: selectedClientId,
        limit: 20,
      });
    },
    enabled: !!selectedClientId,
  });

  const handleClientSelect = (clientId: string, clientName: string) => {
    setSelectedClientId(clientId || null);
    setSelectedClientName(clientName);
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
    const newImages = Array.from(files).filter(file => file.type.startsWith('image/'));
    setSelectedImages(prev => [...prev, ...newImages]);
  };

  const handleRemoveImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  const { mutate: createTicket, isPending } = useMutation({
    mutationFn: async (data: CreateTicketFormData) => {
      const request: CreateTicketRequest = {
        contactId: activeContact?.id ?? '',
        contractId: Number(data.contractId),
        description: data.description,
        issue: data.issue,
        images: selectedImages.length > 0 ? selectedImages : undefined,
      };
      
      console.log('Creating ticket with data:', {
        ...data,
        request,
        clientId: selectedClientId,
        clientName: selectedClientName,
        contractId: selectedContractId,
        images: selectedImages,
        imageCount: selectedImages.length,
      });
      
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
      showToast('No se pudo crear el ticket. Intente nuevamente.', { scheme: 'error' });
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
    onClose();
  };

  return {
    contracts: contractsData?.contracts ?? [],
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
    isLoadingContracts,
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

