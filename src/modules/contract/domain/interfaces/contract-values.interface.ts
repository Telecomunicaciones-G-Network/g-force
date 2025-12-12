import type { ContractStatusCode, ContractStatusName } from '../types';

export interface ContractValues {
  address: string;
  installationDate: string;
  napBox: string;
  number: number;
  plan: string;
  speedPlan: string;
  statusCode: ContractStatusCode;
  statusName: ContractStatusName;
}
