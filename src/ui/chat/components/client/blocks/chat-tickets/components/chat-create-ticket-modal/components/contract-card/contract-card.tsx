'use client';

import type { ContractCardProps } from './contract-card.props';

import { MdOutlineReceiptLong } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import styles from './contract-card.module.css';

export const ContractCard = ({
  address,
  client_type_name,
  isSelected = false,
  number,
  onClick,
}: Readonly<ContractCardProps>) => {
  return (
    <button
      className={`${styles.base} ${isSelected ? styles.base__selected : ''}`}
      onClick={onClick}
      type="button"
    >
      <div className={styles.base__icon}>
        <MdOutlineReceiptLong size={24} />
      </div>
      <div className={styles.base__content}>
        <div className={styles.base__header}>
          <Text
            as="span"
            level="small"
            scheme="label"
            className="font-semibold"
          >
            Contrato
          </Text>
          <span className={styles.base__badge}>{client_type_name}</span>
        </div>
        <Text as="p" level="small" scheme="label" className="font-medium">
          Número: {number}
        </Text>
        <Text
          as="p"
          level="small"
          scheme="label"
          className={styles.base__address}
        >
          Dirección: {address}
        </Text>
      </div>
    </button>
  );
};
