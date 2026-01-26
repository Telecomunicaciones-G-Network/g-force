'use client';

import type { GetContactTicketsResponse } from '@module-chat/domain/interfaces';
import type { TicketValues } from '@module-ticket/domain/interfaces';
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
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState<number | null>(null);
  const [selectedTicketData, setSelectedTicketData] =
    useState<TicketValues | null>(null);

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

  const handleOpenDetailModal = (
    ticketId: number,
    ticketData: TicketValues,
  ) => {
    setSelectedTicketId(ticketId);
    setSelectedTicketData(ticketData);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedTicketId(null);
    setSelectedTicketData(null);
  };

  return {
    filterStatus,
    handleCloseCreateModal,
    handleCloseDetailModal,
    handleFilterChange,
    handleOpenCreateModal,
    handleOpenDetailModal,
    isCreateModalOpen,
    isDetailModalOpen,
    isError: isError || !data?.success,
    isLoading,
    selectedTicketId,
    selectedTicketData,
    tickets: filteredTickets,
  };
};
