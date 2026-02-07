import type {
  ContractStatusCode,
  ContractStatusName,
} from '@module-contract/domain/types';

/**
 * @name GetContactContractsResultBankAssociatedData
 *
 * @description This interface represents the bank associated data of a contact's contract.
 *
 * @property {string} bank_account_number - The bank account number.
 * @property {string} bank_acronym - The bank acronym.
 * @property {string} bank_code - The bank code.
 */
export interface GetContactContractsResultBankAssociatedData {
  bank_account_number: string;
  bank_acronym: string;
  bank_code: string;
  bank_identification: string;
  bank_name: string;
  bank_phone: string;
}

/**
 * @name GetContactContractsResultBalance
 *
 * @description This interface represents the balance of a contact's contract.
 *
 * @property {number} bs_to_usd - The balance in USD.
 * @property {number} bs - The balance in BS.
 * @property {number} total_in_bs - The total balance in BS.
 * @property {number} total_in_usd - The total balance in USD.
 * @property {number} usd_to_bs - The balance in BS.
 * @property {number} usd - The balance in USD.
 */
export interface GetContactContractsResultBalance {
  bs_to_usd: 0;
  bs: 0;
  total_in_bs: 0;
  total_in_usd: 0;
  usd_to_bs: 0;
  usd: 0;
}

/**
 * @name GetContactContractsResult
 *
 * @description This interface represents the result of a contact's contract query.
 *
 * @property {string} address - The address of the contract.
 * @property {GetContactContractsResultBalance} balance - The balance of the contract.
 * @property {GetContactContractsResultBankAssociatedData} bank_associated_data - The bank associated data of the contract.
 * @property {string} client_type_name - The name of the client type.
 * @property {number} client_type - The type of the client.
 * @property {number} contract_number - The number of the contract.
 * @property {string} installation_date - The installation date of the contract.
 * @property {string} nap_box - The NAP box of the contract.
 * @property {string} plan - The plan of the contract.
 * @property {string} speed_plan - The speed plan of the contract.
 * @property {ContractStatusCode} status_code - The status code of the contract.
 * @property {ContractStatusName} status_name - The status name of the contract.
 */
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
