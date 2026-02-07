'use client';

import { useGetContactContractsQuery } from '@ui-chat/queries/get-contact-contracts-query.hook';

export const useChatContracts = () => {
  const { data, isError, isLoading } = useGetContactContractsQuery();

  return {
    contracts: data?.contracts ?? [],
    isError: isError || !data?.success,
    isLoading,
  };
};
