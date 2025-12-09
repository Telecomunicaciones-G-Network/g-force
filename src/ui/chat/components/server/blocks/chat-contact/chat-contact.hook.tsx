'use client';

import type { GetContactInformationResponse } from '@module-chat/domain/interfaces';

import { useQuery } from '@tanstack/react-query';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { GetContactInformationQuery } from '@module-chat/infrastructure/queries/get-contact-information.query';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatContact = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  const { data, isError, isLoading } = useQuery<GetContactInformationResponse>({
    queryKey: [CHAT_TAGS.GET_CHAT_CONTACT_INFORMATION, activeContact?.id],
    queryFn: () => GetContactInformationQuery(activeContact?.id),
    enabled: !!activeContact?.id,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return {
    contactInformation: data?.data,
    contactName: activeContact?.name,
    isContactActive: false,
    isError: isError || !data?.success,
    isLoading,
    phoneNumber: activeContact?.phoneNumber,
  };
};
