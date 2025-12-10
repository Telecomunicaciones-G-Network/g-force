import type { ContractValues } from '../interfaces';
import type { ContractStatusName } from '../types';

import { ContractStatus } from '../enums/contract-status.enum';

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
    public status: ContractStatus,
    public statusName: ContractStatusName,
  ) {}

  public toValues(): ContractValues {
    return {
      address: this.address,
      installationDate: this.installationDate,
      napBox: this.napBox,
      number: this.number,
      plan: this.plan,
      speedPlan: this.speedPlan,
      status: this.status,
      statusName: this.statusName,
    };
  }
}
