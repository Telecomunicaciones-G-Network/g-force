import type { TicketValues } from '../interfaces';
import type { TicketStatusCode, TicketStatusName } from '../types';

export class Ticket {
  constructor(
    public contractId: number,
    public createdAt: string,
    public dateCreatedAt: string,
    public description: string = '',
    public issue: string,
    public number: number,
    public statusCode: TicketStatusCode,
    public statusName: TicketStatusName,
  ) {}

  public toValues(): TicketValues {
    return {
      contractId: this.contractId,
      createdAt: this.createdAt,
      dateCreatedAt: this.dateCreatedAt,
      description: this.description,
      issue: this.issue,
      number: this.number,
      statusCode: this.statusCode,
      statusName: this.statusName,
    };
  }
}
