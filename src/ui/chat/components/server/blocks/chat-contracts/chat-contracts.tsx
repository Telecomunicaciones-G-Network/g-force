import type { ChatContract } from '@ui-chat/interfaces';
import type { ChatContractsProps } from './chat-contracts.props';

import { ChatDetailsTabContentLayout } from '@ui-chat/layouts/chat-details-tab-content-layout';

import { ChatContractCard } from '@ui-chat/components/server/cards/chat-contract-card';

import { ChatContracts as ChatContractsList } from '@ui-chat/iterators/chat-contracts.iterator';

import styles from './chat-contracts.module.css';

export const ChatContracts = ({ title = '' }: Readonly<ChatContractsProps>) => (
  <ChatDetailsTabContentLayout title={title}>
    <div className={styles.base}>
      {ChatContractsList?.map((contract: ChatContract) => (
        <ChatContractCard key={contract?.id} open={true} {...contract} />
      ))}
    </div>
  </ChatDetailsTabContentLayout>
);
