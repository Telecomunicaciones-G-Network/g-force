import type { Contract } from '@module-contract/domain/interfaces';

/**
 * @name ContractCardListProps
 *
 * @description Props for the ContractCardList component.
 *
 * @property {Contract[]} contracts - The contracts to display in the list.
 * @property {Contract} [selectedContract] - The currently selected contract.
 * @property {function} [onContractSelect] - Function to call when a contract is selected.
 */
export interface ContractCardListProps {
  contracts: Contract[];
  selectedContract?: Contract;
  onContractSelect?: (contract: Contract) => void;
}
