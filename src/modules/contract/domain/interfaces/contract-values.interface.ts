import type { ContractStatusCode, ContractStatusName } from '../types';

export interface ContractValues {
  client_type_name: string;
  planName: string;
  address: string;
  installationDate: string;
  napBox: string;
  number: number;
  plan: string;
  speedPlan: string;
  statusCode: ContractStatusCode;
  statusName: ContractStatusName;
}
