/**
 * @name ContractBalance
 *
 * @description This interface represents the balance of a contract.
 *
 * @property {number} bs - The balance in Bs.
 * @property {number} bsToUsd - The balance in USD.
 * @property {number} totalInBs - The total balance in Bs.
 * @property {number} totalInUsd - The total balance in USD.
 * @property {number} usd - The balance in USD.
 * @property {number} usdToBs - The balance in Bs.
 */
export interface ContractBalance {
  bs: number;
  bsToUsd: number;
  totalInBs: number;
  totalInUsd: number;
  usd: number;
  usdToBs: number;
}
