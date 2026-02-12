'use client';

import type { Contract } from '@module-contract/domain/interfaces/contract.interface';
import type {
  ContractStatusName,
  ContractStatusCode,
} from '@module-contract/domain/types';

import { useEffect, useState } from 'react';

import { ClientContract } from '@ui-chat/components/client/blocks/chat-tickets/components/client-search-dropdown/client-search-dropdown.hook';

import { useGetContactInformationQuery } from '@ui-chat/queries/get-contact-information-query.hook';
import { useGetContactContractsQuery } from '@ui-chat/queries/get-contact-contracts-query.hook';

/**
 * @name useCreateTicketModalContent
 *
 * @description Hook to manage the create ticket form state and submission.
 *
 * @returns clientFullName - The full name of the client.
 * @returns contracts - The contracts of the client.
 * @returns filterClientId - The id of the client.
 * @returns filterClientName - The name of the client.
 * @returns filterSelectedContract - The selected contract.
 * @returns isLoadingContactInformation - Whether the contact information is loading.
 * @returns isLoadingContracts - Whether the contracts are loading.
 * @returns isSearchMode - Whether the search mode is enabled.
 * @returns onClientSearch - Function to handle the client search.
 * @returns selectedContract - The selected contract.
 * @returns toggleSearchMode - Function to toggle the search mode.
 *
 * TODO: Delete the way that client searching works in this component
 * TODO: Delete the mapper
 */
export const useCreateTicketModalContent = () => {
  const [filterClientId, setFilterClientId] = useState<string | null>(null);
  const [filterClientName, setFilterClientName] = useState<string | null>(null);
  const [filterClientContracts, setFilterClientContracts] = useState<
    ClientContract[]
  >([]);
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false);
  const [selectedContract, setSelectedContract] = useState<
    Contract | undefined
  >();
  const [filterSelectedContract, setFilterSelectedContract] = useState<
    Contract | undefined
  >();

  const {
    data: contactInformationData,
    isLoading: isLoadingContactInformation,
  } = useGetContactInformationQuery();
  const { data: contactContractsData, isLoading: isLoadingContracts } =
    useGetContactContractsQuery();

  const toggleSearchMode = () => setIsSearchMode(!isSearchMode);

  const onClientSearch = (
    clientId: string,
    clientName: string,
    contracts: ClientContract[],
  ) => {
    setFilterClientId(clientId);
    setFilterClientName(clientName);
    setFilterClientContracts(contracts);
    setFilterSelectedContract(
      contracts?.map((contract) => {
        return {
          number: contract?.contract_number,
          address: contract?.address,
          clientType: contract?.client_type,
          clientTypeName: contract?.client_type_name,
          installationDate: contract?.installation_date,
          napBox: contract?.nap_box,
          planName: contract?.plan,
          speedPlan: contract?.speed_plan,
          statusName: contract?.status_name as ContractStatusName,
          statusCode: contract?.status_code as ContractStatusCode,
        };
      })?.[0] ?? undefined,
    );
  };

  useEffect(() => {
    if (
      contactContractsData &&
      Array.isArray(contactContractsData?.contracts) &&
      contactContractsData?.contracts?.length !== 0
    ) {
      setSelectedContract(contactContractsData?.contracts?.[0]);
    }
  }, [contactContractsData]);

  const handleContractSelect = (contract: Contract) => {
    setSelectedContract(contract);
  };

  const handleFilterContractSelect = (contract: Contract) => {
    setFilterSelectedContract(contract);
  };

  return {
    clientFullName: contactInformationData?.data?.fullName,
    contracts: contactContractsData?.contracts ?? [],
    filterClientId,
    filterClientName,
    filterClientContracts:
      filterClientContracts?.map((filterClientContract) => {
        return {
          number: filterClientContract?.contract_number,
          address: filterClientContract?.address,
          clientType: filterClientContract?.client_type,
          clientTypeName: filterClientContract?.client_type_name,
          installationDate: filterClientContract?.installation_date,
          napBox: filterClientContract?.nap_box,
          planName: filterClientContract?.plan,
          speedPlan: filterClientContract?.speed_plan,
          statusName: filterClientContract?.status_name as ContractStatusName,
          statusCode: filterClientContract?.status_code as ContractStatusCode,
        };
      }) ?? [],
    filterSelectedContract,
    handleContractSelect,
    handleFilterContractSelect,
    isLoadingContactInformation,
    isLoadingContracts,
    isSearchMode,
    onClientSearch,
    selectedContract,
    toggleSearchMode,
  };
};
