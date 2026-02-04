'use client';

import type { Contract } from '@module-contract/domain/interfaces';
import type { ChatContractsProps } from './chat-contracts.props';

import { MdMoodBad } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { ChatDetailsTabContentLayout } from '@ui-chat/layouts/chat-details-tab-content-layout';

import { ChatContractCard } from '@ui-chat/components/server/cards/chat-contract-card';

import { ChatContractsSkeletons } from './components/chat-contracts-skeletons';

import { useChatContracts } from './chat-contracts.hook';

import styles from './chat-contracts.module.css';

export const ChatContracts = ({ title = '' }: Readonly<ChatContractsProps>) => {
  const { contracts, isError, isLoading } = useChatContracts();

  return (
    <ChatDetailsTabContentLayout title={title}>
      {isLoading && <ChatContractsSkeletons />}
      {!isLoading && isError && (
        <div className={styles.base__contracts_error}>
          <MdMoodBad className="min-h-10 min-w-10 size-10" />
          <Text
            as="h5"
            className="text-center text-neutral-900"
            level="medium"
            scheme="label"
          >
            Ha ocurrido un error al cargar los contratos
          </Text>
        </div>
      )}
      {!isLoading && !isError && (
        <div className={styles.base}>
          {contracts?.map((contract: Contract, index: number) => (
            <ChatContractCard
              key={contract?.number?.toString()}
              contract={contract}
              open={true}
              title={`Contrato #${index + 1}`}
            />
          ))}
        </div>
      )}
    </ChatDetailsTabContentLayout>
  );
};
