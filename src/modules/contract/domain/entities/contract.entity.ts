import type { ContractValues } from '../interfaces';
import type { ContractStatusCode, ContractStatusName } from '../types';

export class Contract {
  constructor(
    public address: string,
    public installationDate: string = new Date()
      .toISOString()
      .replace('Z', '000Z'),
    public napBox: string,
    public number: number,
    public plan: string,
    public speedPlan: string,
    public statusCode: ContractStatusCode,
    public statusName: ContractStatusName,
  ) {}

  public toValues(): ContractValues {
    return {
      client_type_name: '',
      planName: '',
      address: this.address,
      installationDate: this.installationDate,
      napBox: this.napBox,
      number: this.number,
      plan: this.plan,
      speedPlan: this.speedPlan,
      statusCode: this.statusCode,
      statusName: this.statusName,
    };
  }
}
