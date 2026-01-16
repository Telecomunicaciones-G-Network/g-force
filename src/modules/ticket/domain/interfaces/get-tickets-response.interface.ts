import type { TicketValues } from './ticket-values.interface';

export interface GetTicketsResponse {
  count?: number;
  next: string | null;
  previous: string | null;
  status: number;
  success: boolean;
  tickets: TicketValues[];
}
