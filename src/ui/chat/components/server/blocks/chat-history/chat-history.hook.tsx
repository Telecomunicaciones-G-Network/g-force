'use client';

import type { GetContactNotesResponse } from '@module-chat/domain/interfaces';

import { useQuery } from '@tanstack/react-query';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { GetContactNotesQuery } from '@module-chat/infrastructure/queries/get-contact-notes.query';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatHistory = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  const { data, isError, isLoading } = useQuery<GetContactNotesResponse>({
    queryKey: [
      CHAT_TAGS.GET_CHAT_CONTACT_NOTES,
      activeContact?.id,
      { limit: 20 },
    ],
    queryFn: () =>
      GetContactNotesQuery({
        contactId: activeContact?.id ?? '',
        limit: 20,
      }),
    enabled: !!activeContact?.id,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return {
    isError,
    isLoading,
    notes: data?.notes ?? [],
  };
};
