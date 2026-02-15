import type { Contract } from '@module-contract/domain/interfaces';

/**
 * @name ContractCardProps
 *
 * @description Props for the ContractCard component.
 *
 * @property {Contract} contract - The contract to display in the card.
 * @property {boolean} [isActive] - Whether the contract is active.
 * @property {function} [onClick] - Function to call when the card is clicked.
 */
export interface ContractCardProps {
  contract: Contract;
  isActive?: boolean;
  onClick?: () => void;
}
