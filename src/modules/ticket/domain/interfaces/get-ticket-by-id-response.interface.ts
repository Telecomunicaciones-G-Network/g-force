import type { TicketDetail } from './ticket-detail.interface';

export interface GetTicketByIdResponse {
  status: number;
  success: boolean;
  results: TicketDetail | null;
}
