import type { Ticket } from './ticket.interface';

export interface GetTicketsResponse {
  count?: number;
  next: string | null;
  previous: string | null;
  status: number;
  success: boolean;
  tickets: Ticket[];
}
