import type { ContractStatusName } from '@module-contract/domain/types';

import { ContractStatus } from '@module-contract/domain/enums/contract-status.enum';

export interface GetContactContractsResult {
  address: string;
  client_type_name: string;
  client_type: number;
  contract_number: number;
  installation_date: string;
  nap_box: string;
  plan: string;
  speed_plan: string;
  status_name: ContractStatusName;
  status: ContractStatus;
}
