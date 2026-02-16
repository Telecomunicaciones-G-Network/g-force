import type { ContractStatusCode, ContractStatusName } from '../types';

/**
 * @name Contract
 *
 * @description Represents a contract entity and its associated properties.
 *
 * @property number - The unique contract number.
 * @property address - The physical address associated with the contract.
 * @property clientType - The numeric identifier representing the type of client.
 * @property clientTypeName - The display name of the client type.
 * @property installationDate - The date of installation.
 * @property nap_box - The NAP box associated with the contract.
 * @property planName - The name of the plan.
 * @property speedPlan - The speed plan of the contract.
 * @property statusCode - The code representing the current status of the contract.
 * @property statusName - The human-readable description of the contract's status.
 */
export interface Contract {
  number: number;
  address: string;
  clientType: number;
  clientTypeName: string;
  installationDate: string;
  napBox: string;
  planName: string;
  speedPlan: string;
  statusCode: ContractStatusCode;
  statusName: ContractStatusName;
}
