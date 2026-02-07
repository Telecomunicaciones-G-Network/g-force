'use client';

import type { GetContactTicketsResponse } from '@module-chat/domain/interfaces';
import type { TicketFilterOptionValue } from '@ui-ticket/types';

import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { useModal } from '@gnetwork-ui/components/organisms/modals/modal/modal.hook';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { GetContactTicketsQuery } from '@module-chat/infrastructure/queries/get-contact-tickets.query';

import { TicketFilterOptionValues } from '@ui-ticket/enums/ticket-filter-option-values.enum';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * @name useChatTickets
 *
 * @description This hook is used to manage the state of the chat tickets.
 *
 * @returns changeFilterStatus - The function to change the filter status.
 * @returns filterStatus - The current filter status.
 * @returns isCreateTicketModalOpen - The state of the create ticket modal.
 * @returns onOpenCreateTicketModal - The function to open the create ticket modal.
 * @returns tickets - The tickets.
 *
 * TODO: In Query I need to change the way that build the query key for get contact tickets query
 */
export const useChatTickets = () => {
  const {
    isModalOpen: isCreateTicketModalOpen,
    onOpenChange: onOpenCreateTicketModal,
  } = useModal();
  const activeContact = useContactStore((state) => state.activeContact);

  const [filterStatus, setFilterStatus] = useState<TicketFilterOptionValue>(
    TicketFilterOptionValues.ALL,
  );

  const { data, isError, isLoading } = useQuery<GetContactTicketsResponse>({
    queryKey: [
      CHAT_TAGS.GET_CHAT_CONTACT_TICKETS,
      activeContact?.id,
      { page_size: 20, page: 1 },
    ],
    queryFn: () =>
      GetContactTicketsQuery({
        contactId: activeContact?.id,
        limit: 20,
        page: 1,
      }),
    enabled: !!activeContact?.id,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const changeFilterStatus = (status: TicketFilterOptionValue) =>
    setFilterStatus(status);

  return {
    changeFilterStatus,
    filterStatus,
    isCreateTicketModalOpen,
    isError: isError || !data?.success,
    isLoading,
    onOpenCreateTicketModal,
    tickets:
      filterStatus === TicketFilterOptionValues.ALL
        ? (data?.tickets ?? [])
        : (data?.tickets?.filter(
            (ticket) => ticket.statusName === filterStatus,
          ) ?? []),
  };
};
