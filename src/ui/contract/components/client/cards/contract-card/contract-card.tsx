'use client';

import type { ContractCardProps } from './contract-card.props';

import { MdOutlineReceiptLong } from 'react-icons/md';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ContractCardBody } from './components/contract-card-body';
import { ContractCardHeader } from './components/contract-card-header';

import styles from './contract-card.module.css';

/**
 * @name ContractCard
 *
 * @description Component to display a contract card.
 *
 * @property {Contract} contract - The contract to display in the card.
 * @property {boolean} [isActive] - Whether the contract is active.
 */
export const ContractCard = ({
  contract,
  isActive = false,
}: Readonly<ContractCardProps>) => (
  <>
    {contract && (
      <button
        className={cn(
          styles.base,
          'bg-background border border-solid border-neutral-200 hover:border-red-600',
          isActive && 'border-red-600',
        )}
        type="button"
      >
        <div className={cn(styles.base__icon, 'bg-red-100 text-red-600')}>
          <MdOutlineReceiptLong className="min-h-6 min-w-6 size-6" />
        </div>
        <div className={styles.base__content}>
          <ContractCardHeader contract={contract} />
          <ContractCardBody contract={contract} />
        </div>
      </button>
    )}
  </>
);
