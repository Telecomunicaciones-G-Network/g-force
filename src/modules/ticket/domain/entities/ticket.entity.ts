import type { Ticket as TicketValues } from '../interfaces';
import type { TicketStatusCode, TicketStatusName } from '../types';

/**
 * @name Ticket
 *
 * @description This entity represents a ticket.
 *
 * @property {number} id - The ticket id
 * @property {number} contractId - The contract id
 * @property {string} createdAt - The creation date
 * @property {string} dateCreatedAt - The creation date in ISO 8601 format
 * @property {string} description - The description
 * @property {TicketStatusCode} statusCode - The status code
 * @property {TicketStatusName} statusName - The status name
 */
export class Ticket {
  /**
   * Constructor
   */
  constructor(
    public id: number,
    public contractId: number,
    public createdAt: string,
    public dateCreatedAt: string,
    public description: string | null = null,
    public statusCode: TicketStatusCode,
    public statusName: TicketStatusName,
  ) {}

  /**
   * @name toValues
   *
   * @description Convert the ticket to values
   *
   * @returns {TicketValues} The ticket values
   */
  public toValues(): TicketValues {
    return {
      id: this.id,
      contractId: this.contractId,
      createdAt: this.createdAt,
      dateCreatedAt: this.dateCreatedAt,
      description: this.description,
      statusCode: this.statusCode,
      statusName: this.statusName,
    };
  }
}
