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

// import { getContactContractsService } from '@module-chat/infrastructure/services/get-contact-contracts.service';
import type { ContractValues } from '@module-contract/domain/interfaces';

// Mock data para pruebas de diseño
// Extendemos ContractValues con contractType para el mock
const MOCK_CONTRACTS: Array<ContractValues & { contractType: string }> = [
  {
    address: 'Calle Principal, Edificio Torre A, Piso 5, Apto 501, Maiquetia',
    installationDate: '2023-01-15',
    napBox: 'NAP-001',
    number: 60892,
    plan: 'Plan Premium 100MB',
    speedPlan: '100 Mbps',
    statusCode: 'ACTIVE',
    statusName: 'Activo',
    contractType: 'Residencial',
  },
  {
    address: 'Avenida Libertador, Residencias El Parque, Torre B, Piso 3, Apto 302',
    installationDate: '2023-03-20',
    napBox: 'NAP-002',
    number: 60893,
    plan: 'Plan Empresarial 200MB',
    speedPlan: '200 Mbps',
    statusCode: 'ACTIVE',
    statusName: 'Activo',
    contractType: 'Empresarial',
  },
  {
    address: 'Urbanización Los Pinos, Casa 45, Sector Norte',
    installationDate: '2023-05-10',
    napBox: 'NAP-003',
    number: 60894,
    plan: 'Plan Básico 50MB',
    speedPlan: '50 Mbps',
    statusCode: 'SUSPENDED',
    statusName: 'Suspendido',
    contractType: 'Residencial',
  },
  {
    address: 'Calle Comercio, Local 12, Centro Comercial Plaza Mayor',
    installationDate: '2023-07-01',
    napBox: 'NAP-004',
    number: 60895,
    plan: 'Plan Ultra 500MB',
    speedPlan: '500 Mbps',
    statusCode: 'ACTIVE',
    statusName: 'Activo',
    contractType: 'Comercial',
  },
];

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

  // TODO: Descomentar cuando se defina la integración con el endpoint
  // Fetch contracts when a client is selected
  // const { data: contractsData, isLoading: isLoadingContracts } = useQuery({
  //   queryKey: ['client-contracts', selectedClientId],
  //   queryFn: async () => {
  //     if (!selectedClientId) return { contracts: [] };
  //     return await getContactContractsService({
  //       contactId: selectedClientId,
  //       limit: 20,
  //     });
  //   },
  //   enabled: !!selectedClientId,
  // });

  // Mock: Simular carga de contratos
  const contractsData = selectedClientId ? { contracts: MOCK_CONTRACTS } : { contracts: [] };
  const isLoadingContracts = false;

  const handleClientSelect = (clientId: string, clientName: string) => {
    setSelectedClientId(clientId || null);
    setSelectedClientName(clientName);
    setSelectedContractId(null);
  };

  const handleContractSelect = (contractId: number) => {
    setSelectedContractId(contractId);
  };

   const { mutate: createTicket, isPending } = useMutation({
  //     mutationFn: async (data: CreateTicketFormData) => {
  //     const request: CreateTicketRequest = {
  //       contactId: activeContact?.id ?? '',
  //       contractId: Number(data.contractId),
  //       description: data.description,
  //       issue: data.issue,
  //     };
  //     return await CreateTicketCommand(request);
    mutationFn: (data: CreateTicketFormData) => {
      // Simulación de POST request para pruebas
      console.log('Creating ticket with data:', {
        ...data,
        clientId: selectedClientId,
        clientName: selectedClientName,
        contractId: selectedContractId,
      });

      // Simular delay de red (1.5 segundos)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true, ticketId: Math.floor(Math.random() * 10000) });
        }, 1500);
      });
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
      showToast('No se pudo crear el ticket. Intente nuevamente.');
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
    onClose();
  };

  return {
    contracts: contractsData?.contracts ?? [],
    control,
    errors,
    handleClientSelect,
    handleClose,
    handleContractSelect,
    isPending,
    isLoadingContracts,
    isSuccess,
    onSubmit,
    selectedClientName,
    selectedContractId,
    setValue,
  };
};
