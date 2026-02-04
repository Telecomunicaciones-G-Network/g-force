import type { ContractCardProps } from '../../contract-card.props';

/**
 * @name ContractCardBodyProps
 *
 * @description Props for the ContractCardBody component.
 *
 * @property {ContractCardProps} contract - The contract to display in the body.
 */
export type ContractCardBodyProps = Pick<ContractCardProps, 'contract'>;
