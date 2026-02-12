'use client';

import type { CreateTicketModalContentProps } from './create-ticket-modal-content.props';

import { MdSearch } from 'react-icons/md';

import { capitalizeWords } from '@stringify/utils/capitalize-words.util';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Tooltip } from '@gnetwork-ui/components/molecules/tooltips/tooltip';

import { CreateTicketForm } from '@ui-ticket/components/client/forms/create-ticket-form';

import { ContractCardList } from '@ui-contract/components/server/lists/contract-card-list';

import { CreateTicketModalContentClientSkeleton } from '../create-ticket-modal-content-client-skeleton';
import { CreateTicketModalContentContractsSkeleton } from '../create-ticket-modal-content-contracts-skeleton';
import { CreateTicketModalContentSearch } from '../create-ticket-modal-content-search';

import { useCreateTicketModalContent } from './create-ticket-modal-content.hook';

import styles from './create-ticket-modal-content.module.css';

/**
 * @name CreateTicketModalContent
 *
 * @description Component to display the create ticket modal content.
 *
 * @property {function} [onClose] - Function to close the create ticket modal.
 *
 * TODO: Refactor this component to use the new search mode.
 */
export const CreateTicketModalContent = ({
  onClose,
}: Readonly<CreateTicketModalContentProps>) => {
  const {
    clientFullName,
    contracts,
    filterClientId,
    filterClientName,
    filterClientContracts,
    filterSelectedContract,
    handleContractSelect,
    handleFilterContractSelect,
    isLoadingContactInformation,
    isLoadingContracts,
    isSearchMode,
    onClientSearch,
    selectedContract,
    toggleSearchMode,
  } = useCreateTicketModalContent();

  return (
    <div className={styles.base}>
      {isSearchMode && (
        <CreateTicketModalContentSearch
          filterClientName={filterClientName}
          onClientSearch={onClientSearch}
          toggleSearchMode={toggleSearchMode}
        />
      )}
      {!isSearchMode && (
        <div className={styles.base__client}>
          {clientFullName &&
            (isLoadingContactInformation ? (
              <CreateTicketModalContentClientSkeleton />
            ) : (
              <div className={styles.base__client_info}>
                <Text
                  as="span"
                  className="text-neutral-500 block mb-1"
                  level="small"
                  scheme="label"
                >
                  Cliente
                </Text>
                <Text
                  as="span"
                  className="font-bold text-black"
                  level="medium"
                  scheme="label"
                >
                  {capitalizeWords(clientFullName)}
                </Text>
              </div>
            ))}
          <div className="flex items-center gap-2">
            <Tooltip
              side="bottom"
              triggerAsChild
              triggerComponent={
                <button
                  className="flex items-center gap-2 px-2 py-1 bg-white border border-neutral-300 rounded-lg transition-colors hover:bg-neutral-100"
                  type="button"
                  tabIndex={-1}
                  onClick={toggleSearchMode}
                >
                  <MdSearch
                    size={18}
                    className="text-neutral-600 cursor-pointer"
                  />
                </button>
              }
            >
              <Text
                as="span"
                level="small"
                scheme="label"
                className="text-white"
              >
                Buscar cliente
              </Text>
            </Tooltip>
          </div>
        </div>
      )}
      {!isSearchMode && (
        <>
          {isLoadingContracts ? (
            <CreateTicketModalContentContractsSkeleton />
          ) : (
            <div className={styles.base__contracts}>
              <Text
                as="label"
                className="text-neutral"
                level="small"
                scheme="label"
              >
                Selecciona un contrato
              </Text>
              <ContractCardList
                contracts={contracts}
                selectedContract={selectedContract}
                onContractSelect={handleContractSelect}
              />
            </div>
          )}
          {selectedContract && (
            <CreateTicketForm
              onSuccess={onClose}
              selectedContract={selectedContract}
            />
          )}
        </>
      )}
      {filterClientId && isSearchMode && (
        <>
          <div className={styles.base__contracts}>
            <Text
              as="label"
              className="text-neutral"
              level="small"
              scheme="label"
            >
              Selecciona un contrato
            </Text>
            <ContractCardList
              contracts={filterClientContracts}
              selectedContract={filterSelectedContract}
              onContractSelect={handleFilterContractSelect}
            />
          </div>
          {filterSelectedContract && (
            <CreateTicketForm
              filterClientId={filterClientId}
              isSearchMode={isSearchMode}
              onSuccess={onClose}
              selectedContract={filterSelectedContract}
            />
          )}
        </>
      )}
    </div>
  );
};
