import type {
  TicketStatusCode,
  TicketStatusName,
} from '@module-ticket/domain/types';

export interface GetContactTicketsResult {
  id: number;
  contract_id: number;
  created_at: string;
  date_created_at: string;
  issue: string;
  short_description: string;
  status_code: TicketStatusCode;
  status_name: TicketStatusName;
  ticket_number: number;
}
