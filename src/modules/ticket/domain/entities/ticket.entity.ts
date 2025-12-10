import type { TicketValues } from '../interfaces';
import type { TicketStatusName } from '../types';

import { TicketStatus } from '../enums/ticket-status.enum';

export class Ticket {
  constructor(
    public createdAt: string,
    public dateCreatedAt: string,
    public description: string = '',
    public issue: string,
    public number: number,
    public status: TicketStatus,
    public statusName: TicketStatusName,
  ) {}

  public toValues(): TicketValues {
    return {
      createdAt: this.createdAt,
      dateCreatedAt: this.dateCreatedAt,
      description: this.description,
      issue: this.issue,
      number: this.number,
      status: this.status,
      statusName: this.statusName,
    };
  }
}
