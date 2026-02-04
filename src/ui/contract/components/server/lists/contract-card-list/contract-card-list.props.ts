import type { Contract } from '@module-contract/domain/interfaces';

/**
 * @name ContractCardListProps
 *
 * @description Props for the ContractCardList component.
 *
 * @property {Contract[]} contracts - The contracts to display in the list.
 */
export interface ContractCardListProps {
  contracts: Contract[];
  selectedContract?: Contract;
}
