'use client';

import type { CreateTicketRequest } from '@module-ticket/domain/interfaces';
import type { CreateTicketFormData } from './interface';
import type { CreateTicketFormProps } from './create-ticket-form.props';

import { useRef, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { useToast } from '@gnetwork-ui/components/organisms/toasts/toast/toast.hook';

import { CreateTicketCommand } from '@module-ticket/infrastructure/commands/create-ticket.command';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { getTicketsDepartmentsService } from '@module-ticket/infrastructure/services/get-tickets-departments.service';
import { getTicketsIssuesService } from '@module-ticket/infrastructure/services/get-tickets-issues.service';

import { useGetContactInformationQuery } from '@ui-chat/queries/get-contact-information-query.hook';

import { createTicketFormSchema } from '@ui-ticket/schemas/create-ticket-form.schema';

import { CREATE_TICKET_FORM_DATA_DEFAULT_VALUES } from './constants/create-ticket-form-data-default-values.constant';

/**
 * @name useCreateTicketForm
 *
 * @description Hook to manage the create ticket form state and submission.
 *
 * @property {string | null} [filterClientId] - The id of the client.
 * @property {boolean} [isSearchMode] - Whether the search mode is enabled.
 * @property {function} [onSuccess] - Function to close the create ticket modal.
 * @property {Contract} [selectedContract] - The selected contract.
 *
 * @returns clearErrors - The form clear errors.
 * @returns control - The form control.
 * @returns departments - The departments to create a ticket.
 * @returns departmentValue - The department value.
 * @returns errors - The form errors.
 * @returns fileInputRef - The file input reference.
 * @returns handleSubmit - The form handle submit.
 * @returns isFormvalid - The form status to submit.
 * @returns isLoadingDepartaments - The departments loading state.
 * @returns isLoadingIssues - The issues loading state.
 * @returns isSendingForm - The form sending state.
 * @returns issues - The issues to create a ticket.
 * @returns selectedImages - The selected images.
 * @returns onImageSelect - The function to select an image.
 * @returns onRemoveImage - The function to remove an image.
 * @returns onSubmit - The form on submit.
 * @returns selectedImages - The selected images.
 *
 * TODO: getTicketsDepartamentsService should not be called directly from this hooks use query hook or query to handler
 * TODO: getTicketsIssuesService should not be called directly from this hooks use query hook or query to handler
 * TODO: Check the flow to get departments data
 * TODO: Check the flow to get issues data
 * TODO: Create a query hook to get departments data
 * TODO: Create a query hook to get issues data
 * TODO: Query keys should not be hardcoded use a dictionary
 * TODO: Check onImageSelect method
 * TODO: Check all send form process
 * TODO: Delete formState from this hook after refactor textarea component driving using TextAreaInputController
 */
export const useCreateTicketForm = ({
  filterClientId,
  isSearchMode,
  onSuccess,
  selectedContract,
}: Readonly<CreateTicketFormProps>) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const queryClient = useQueryClient();
  const { showToast } = useToast();

  const {
    clearErrors: clearErrorsForm,
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<CreateTicketFormData>({
    defaultValues: CREATE_TICKET_FORM_DATA_DEFAULT_VALUES,
    mode: 'onSubmit',
    resolver: zodResolver(createTicketFormSchema),
    reValidateMode: 'onSubmit',
  });

  const departmentValue = watch('department')?.trim();
  const descriptionValue = watch('description')?.trim();
  const issueValue = watch('issue')?.trim();

  const { data: contactInformationData } = useGetContactInformationQuery();

  const { data: departmentsData, isLoading: isLoadingDepartaments } = useQuery({
    queryKey: ['tickets-departments'],
    queryFn: getTicketsDepartmentsService,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const { data: issuesData, isLoading: isLoadingIssues } = useQuery({
    queryKey: ['tickets-issues', departmentValue],
    queryFn: async () => {
      if (!departmentValue) return [];

      return await getTicketsIssuesService({
        department: departmentValue,
      });
    },
    enabled: !!departmentValue,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const { mutate: createTicket, isPending: isSendingForm } = useMutation({
    mutationFn: async (data: CreateTicketFormData) => {
      const request: CreateTicketRequest = {
        clientId: isSearchMode
          ? (filterClientId ?? '')
          : (String(contactInformationData?.data?.clientId) ?? ''),
        assignedDepartmentId: +data?.department,
        contractId: selectedContract?.number ?? 0,
        issueId: +data?.issue,
        description: data?.description,
        images: selectedImages?.length > 0 ? selectedImages : undefined,
      };

      return await CreateTicketCommand(request);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CHAT_TAGS.GET_CHAT_CONTACT_TICKETS],
      });
      showToast('Ticket Creado Satisfactoriamente', { scheme: 'success' });

      setTimeout(() => {
        onSuccess?.();
      }, 1000);
    },
    onError: () => {
      showToast('No se pudo crear el ticket. Intente nuevamente.', {
        scheme: 'error',
      });
    },
  });

  const clearErrors = (
    fieldName?: keyof CreateTicketFormData | (keyof CreateTicketFormData)[],
  ) => {
    clearErrorsForm(fieldName);
  };

  const onImageSelect = (files: FileList | null) => {
    if (!files) return;

    const newImages = Array.from(files).filter((file) =>
      file.type.startsWith('image/'),
    );

    setSelectedImages((prev) => [...prev, ...newImages]);
  };

  const onRemoveImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (data: CreateTicketFormData) => createTicket(data);

  return {
    clearErrors,
    control,
    departments: departmentsData ?? [],
    departmentValue,
    errors,
    fileInputRef,
    handleSubmit,
    isFormValid: !!departmentValue && !!descriptionValue && !!issueValue,
    isLoadingDepartaments,
    isLoadingIssues,
    isSendingForm,
    issues: issuesData ?? [],
    onImageSelect,
    onRemoveImage,
    onSubmit,
    selectedImages,
  };
};
