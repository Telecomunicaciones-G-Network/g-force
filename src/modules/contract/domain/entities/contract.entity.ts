import type { Contract as ContractValues } from '../interfaces';
import type { ContractStatusCode, ContractStatusName } from '../types';

/**
 * @name Contract
 *
 * @description This entity represents a contract in the system.
 *
 * @property {number} number - The contract number.
 * @property {string} address - The contract address.
 * @property {number} clientType - The client type.
 * @property {string} clientTypeName - The client type name.
 * @property {string} installationDate - The date of installation.
 * @property {string} napBox - The NAP box.
 * @property {string} planName - The plan name.
 * @property {string} speedPlan - The speed plan.
 * @property {ContractStatusCode} statusCode - The status code.
 * @property {ContractStatusName} statusName - The status name.
 */
export class Contract {
  /**
   * Constructor
   */
  constructor(
    public number: number,
    public address: string,
    public clientType: number,
    public clientTypeName: string,
    public installationDate: string = new Date()
      .toISOString()
      .replace('Z', '000Z'),
    public napBox: string,
    public planName: string,
    public speedPlan: string,
    public statusCode: ContractStatusCode,
    public statusName: ContractStatusName,
  ) {}

  /**
   * @name toValues
   *
   * @description Convert the contract to values
   *
   * @returns {ContractValues} The contract values
   */
  public toValues(): ContractValues {
    return {
      number: this.number,
      address: this.address,
      clientType: this.clientType,
      clientTypeName: this.clientTypeName,
      installationDate: this.installationDate,
      napBox: this.napBox,
      planName: this.planName,
      speedPlan: this.speedPlan,
      statusCode: this.statusCode,
      statusName: this.statusName,
    };
  }
}
