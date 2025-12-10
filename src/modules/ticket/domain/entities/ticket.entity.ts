import type { TicketValues } from '../interfaces';

export class Ticket {
  constructor(
    public createdAt: string,
    public dateCreatedAt: string,
    public description: string = '',
    public issue: string,
    public number: number,
    public status: number,
    public statusName: string,
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
