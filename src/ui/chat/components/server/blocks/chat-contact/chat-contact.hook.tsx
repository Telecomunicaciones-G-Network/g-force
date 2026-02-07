'use client';

import { useGetContactInformationQuery } from '@ui-chat/queries/get-contact-information-query.hook';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatContact = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  const { data, isError, isLoading } = useGetContactInformationQuery();

  return {
    contactInformation: data?.data,
    contactName: data?.data?.fullName ?? activeContact?.name,
    isContactActive: false,
    isError: isError || !data?.success,
    isLoading,
    phoneNumber: data?.data?.phoneNumber ?? activeContact?.phoneNumber,
  };
};
