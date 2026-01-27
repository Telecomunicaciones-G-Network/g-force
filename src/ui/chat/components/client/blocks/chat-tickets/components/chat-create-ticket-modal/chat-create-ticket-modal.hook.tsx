'use client';

import type { CreateTicketRequest } from '@module-ticket/domain/interfaces';
import type { ClientContract } from './components/client-search-dropdown/client-search-dropdown.hook';
import type { GetContactContractsResponse } from '@module-chat/domain/interfaces';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { z } from 'zod';

import { CreateTicketCommand } from '@module-ticket/infrastructure/commands/create-ticket.command';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { useToast } from '@gnetwork-ui/components/organisms/toasts/toast/toast.hook';

import { getTicketsDepartmentsService } from '@module-ticket/infrastructure/services/get-tickets-departments.service';
import { getTicketsIssuesService } from '@module-ticket/infrastructure/services/get-tickets-issues.service';
import { GetContactContractsQuery } from '@module-chat/infrastructure/queries/get-contact-contracts.query';
import { GetContactInformationQuery } from '@module-chat/infrastructure/queries/get-contact-information.query';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

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
  isOpen: boolean;
}

export const useChatCreateTicketModal = ({
  onClose,
  isOpen,
}: UseChatCreateTicketModalProps) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const activeContact = useContactStore((state) => state.activeContact);

  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);
  const [selectedClientName, setSelectedClientName] = useState<string>('');
  const [selectedContractId, setSelectedContractId] = useState<number | null>(
    null,
  );
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [clientContracts, setClientContracts] = useState<ClientContract[]>([]);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [isLoadingContactData, setIsLoadingContactData] = useState(false);

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

  // Cargar automáticamente los datos del cliente del chat al abrir el modal
  useEffect(() => {
    const loadContactData = async () => {
      if (!isOpen || !activeContact?.id || isSearchMode) return;

      setIsLoadingContactData(true);
      try {
        // Obtener información del contacto
        const contactInfo = await GetContactInformationQuery(activeContact.id);

        // Obtener contratos del contacto
        const contractsResponse: GetContactContractsResponse =
          await GetContactContractsQuery({
            contactId: activeContact.id,
            limit: 50,
            page: 1,
          });

        if (contactInfo?.data && contractsResponse?.contracts) {
          // Obtener el client_id directamente de la respuesta de contactInfo
          const realClientId = contactInfo.data.clientId
            ? String(contactInfo.data.clientId)
            : null;

          console.log('✅ client_id obtenido de contactInfo:', {
            clientId: realClientId,
            fullName: contactInfo.data.fullName,
            contactId: activeContact.id,
          });

          if (!realClientId) {
            console.error('❌ No se pudo obtener el client_id del contacto');
          }

          setSelectedClientId(realClientId);
          setSelectedClientName(
            contactInfo.data.fullName || activeContact.name,
          );

          // Mapear contratos al formato esperado
          const mappedContracts: ClientContract[] =
            contractsResponse.contracts.map((contract) => ({
              contract_number: contract.number,
              status_name: contract.statusName || '',
              status_code: contract.statusCode || '',
              client_type: 0,
              client_type_name: contract.client_type_name || 'Residencial',
              installation_date: contract.installationDate || '',
              plan: contract.planName || '',
              speed_plan: '',
              nap_box: '',
              address: contract.address || '',
              balance: {
                usd: 0,
                usd_to_bs: 0,
                bs: 0,
                bs_to_usd: 0,
                total_in_usd: 0,
                total_in_bs: 0,
              },
            }));

          setClientContracts(mappedContracts);

          // Si solo hay un contrato, seleccionarlo automáticamente
          if (mappedContracts.length === 1) {
            setSelectedContractId(mappedContracts[0].contract_number);
          }
        }
      } catch (error) {
        console.error('Error loading contact data:', error);
      } finally {
        setIsLoadingContactData(false);
      }
    };

    loadContactData();
  }, [isOpen, activeContact?.id, activeContact?.name, isSearchMode]);

  const handleClientSelect = (
    clientId: string,
    clientName: string,
    contracts: ClientContract[],
  ) => {
    setSelectedClientId(clientId || null);
    setSelectedClientName(clientName);
    setClientContracts(contracts);
    setSelectedContractId(null);

    // Si se selecciona un cliente desde la búsqueda y solo tiene un contrato, seleccionarlo
    if (contracts.length === 1) {
      setSelectedContractId(contracts[0].contract_number);
    }
  };

  const handleToggleSearchMode = () => {
    setIsSearchMode(!isSearchMode);
    // Limpiar selección al cambiar de modo
    if (!isSearchMode) {
      setSelectedClientId(null);
      setSelectedClientName('');
      setClientContracts([]);
      setSelectedContractId(null);
    }
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
      console.log('🎫 Creando ticket con:', {
        selectedClientId,
        selectedContractId,
        department: data.department,
        issue: data.issue,
      });

      const request: CreateTicketRequest = {
        clientId: selectedClientId ?? '',
        assignedDepartmentId: Number(data.department),
        contractId: selectedContractId ?? 0,
        issueId: Number(data.issue),
        description: data.description,
        images: selectedImages.length > 0 ? selectedImages : undefined,
      };

      console.log('📤 Request final:', request);

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
    setIsSearchMode(false);
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
    handleToggleSearchMode,
    isPending,
    isLoadingContactData,
    isLoadingDepartments,
    isLoadingIssues,
    isSearchMode,
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
