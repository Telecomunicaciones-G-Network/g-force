import type { TicketValues } from './ticket-values.interface';

export interface GetTicketByIdResponse {
  status: number;
  success: boolean;
  ticket: TicketValues | null;
}
