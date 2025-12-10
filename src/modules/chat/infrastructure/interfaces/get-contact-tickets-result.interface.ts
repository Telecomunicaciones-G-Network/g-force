import type { TicketStatusName } from '@module-ticket/domain/types';

import { TicketStatus } from '@module-ticket/domain/enums/ticket-status.enum';

export interface GetContactTicketsResult {
  created_at: string;
  date_created_at: string;
  issue: string;
  short_description: string;
  status_name: TicketStatusName;
  status: TicketStatus;
  ticket_number: number;
}
