'use client';

import type { GetContactTicketsResponse } from '@module-chat/domain/interfaces';
import type { TicketStatusName } from '@module-ticket/domain/types';

import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { GetContactTicketsQuery } from '@module-chat/infrastructure/queries/get-contact-tickets.query';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export type TicketFilterStatus = TicketStatusName | 'Todos';

export const useChatTickets = () => {
  const activeContact = useContactStore((state) => state.activeContact);
  const [filterStatus, setFilterStatus] = useState<TicketFilterStatus>('Todos');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const { data, isError, isLoading } = useQuery<GetContactTicketsResponse>({
    queryKey: [
      CHAT_TAGS.GET_CHAT_CONTACT_TICKETS,
      activeContact?.id,
      { page_size: 20, page: 1 },
    ],
    queryFn: () =>
      GetContactTicketsQuery({
        contactId: activeContact?.id ?? '',
        limit: 20,
        page: 1,
      }),
    enabled: !!activeContact?.id,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const filteredTickets = useMemo(() => {
    const tickets = data?.tickets ?? [];
    if (filterStatus === 'Todos') return tickets;
    return tickets.filter((ticket) => ticket.statusName === filterStatus);
  }, [data?.tickets, filterStatus]);

  const handleFilterChange = (status: TicketFilterStatus) => {
    setFilterStatus(status);
  };

  const handleOpenCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  return {
    filterStatus,
    handleCloseCreateModal,
    handleFilterChange,
    handleOpenCreateModal,
    isCreateModalOpen,
    isError: isError || !data?.success,
    isLoading,
    tickets: filteredTickets,
  };
};
