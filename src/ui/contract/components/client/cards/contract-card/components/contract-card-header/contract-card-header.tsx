import type { ContractCardHeaderProps } from './contract-card-header.props';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { cn } from '@gnetwork-ui/utils/cn.util';

import styles from './contract-card-header.module.css';

export const ContractCardHeader = ({
  contract,
}: Readonly<ContractCardHeaderProps>) => (
  <div className={styles.base}>
    <Text as="span" className="font-semibold" level="small" scheme="label">
      Contrato
    </Text>
    {contract?.clientTypeName && (
      <span className={cn(styles.base__badge, 'bg-green-500 text-neutral-100')}>
        {contract?.clientTypeName}
      </span>
    )}
  </div>
);
