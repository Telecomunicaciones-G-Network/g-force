import type { ContractStatusName } from '../types';

import { ContractStatus } from '../enums/contract-status.enum';

export interface ContractValues {
  address: string;
  installationDate: string;
  napBox: string;
  number: number;
  plan: string;
  speedPlan: string;
  status: ContractStatus;
  statusName: ContractStatusName;
}
