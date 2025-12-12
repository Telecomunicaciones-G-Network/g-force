import type {
  ContractStatusCode,
  ContractStatusName,
} from '@module-contract/domain/types';

export interface GetContactContractsResultBankAssociatedData {
  bank_account_number: string;
  bank_acronym: string;
  bank_code: string;
  bank_identification: string;
  bank_name: string;
  bank_phone: string;
}

export interface GetContactContractsResultBalance {
  bs_to_usd: 0;
  bs: 0;
  total_in_bs: 0;
  total_in_usd: 0;
  usd_to_bs: 0;
  usd: 0;
}

export interface GetContactContractsResult {
  address: string;
  balance: GetContactContractsResultBalance;
  bank_associated_data: GetContactContractsResultBankAssociatedData;
  client_type_name: string;
  client_type: number;
  contract_number: number;
  installation_date: string;
  nap_box: string;
  plan: string;
  speed_plan: string;
  status_code: ContractStatusCode;
  status_name: ContractStatusName;
}
