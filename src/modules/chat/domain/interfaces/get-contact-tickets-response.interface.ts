import type { TicketValues } from '@module-ticket/domain/interfaces';

export interface GetContactTicketsResponse {
  count?: number;
  error?: string | null;
  extra?: Record<string, string>;
  next: string | null;
  previous: string | null;
  status: number;
  success: boolean;
  tickets?: TicketValues[];
}
