import type { TicketValues } from './ticket-values.interface';

export interface CreateTicketResponse {
  status: number;
  success: boolean;
  ticket: TicketValues | null;
}
