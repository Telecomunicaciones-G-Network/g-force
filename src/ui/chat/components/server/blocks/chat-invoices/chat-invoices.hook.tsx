'use client';

import type { GetContactInvoicesResponse } from '@module-chat/domain/interfaces';
import type { Invoice } from '@module-invoice/domain/interfaces';

import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

// import { useFloatingModalAction } from '@gnetwork-ui/components/organisms/modals/floating-modal/floating-modal-action.hook';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { GetContactInvoicesQuery } from '@module-chat/infrastructure/queries/get-contact-invoices.query';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatInvoices = () => {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const activeContact = useContactStore((state) => state.activeContact);

  const { data, isError, isLoading } = useQuery<GetContactInvoicesResponse>({
    queryKey: [
      CHAT_TAGS.GET_CHAT_CONTACT_INVOICES,
      activeContact?.id,
      { page_size: 20, page: 1 },
    ],
    queryFn: () =>
      GetContactInvoicesQuery({
        contactId: activeContact?.id ?? '',
        limit: 20,
        page: 1,
      }),
    enabled: !!activeContact?.id,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const isFloatingModalOpen = useContactStore(
    (state) => state.isPaymentModalOpen,
  );
  const setIsPaymentModalOpen = useContactStore(
    (state) => state.setIsPaymentModalOpen,
  );

  const closePaymentFloatingModal = () => {
    setSelectedInvoice(null);
    setIsPaymentModalOpen(false);
  };

  const openPaymentFloatingModal = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setIsPaymentModalOpen(true);
  };

  useEffect(() => {
    return () => {
      setIsPaymentModalOpen(false);
    };
  }, [setIsPaymentModalOpen]);

  return {
    closePaymentFloatingModal,
    cycle: data?.cycle ?? '',
    invoices: data?.invoices ?? [],
    isError,
    isFloatingModalOpen,
    isLoading,
    openPaymentFloatingModal,
    selectedInvoice,
  };
};
