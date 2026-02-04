import type { Ticket } from './ticket.interface';

export interface CreateTicketResponse {
  status: number;
  success: boolean;
  ticket: Ticket | null;
}
