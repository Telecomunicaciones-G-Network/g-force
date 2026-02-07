import type { ContractCardProps } from '../../contract-card.props';

/**
 * @name ContractCardHeaderProps
 *
 * @description Props for the ContractCardHeader component.
 *
 * @property {ContractCardProps} contract - The contract to display in the header.
 */
export type ContractCardHeaderProps = Pick<ContractCardProps, 'contract'>;
