'use client';

import type { GetContactInvoicesResponse } from '@module-chat/domain/interfaces';

import { useQuery } from '@tanstack/react-query';

import { useFloatingModalAction } from '@gnetwork-ui/components/organisms/modals/floating-modal/floating-modal-action.hook';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { GetContactInvoicesQuery } from '@module-chat/infrastructure/queries/get-contact-invoices.query';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatInvoices = () => {
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

  const { closeFloatingModal, isFloatingModalOpen, openFloatingModal } =
    useFloatingModalAction();

  return {
    closeFloatingModal,
    cycle: data?.cycle ?? '',
    invoices: data?.invoices ?? [],
    isError,
    isFloatingModalOpen,
    isLoading,
    openFloatingModal,
  };
};
