import type { TicketStatusName } from '../types';

import { TicketStatus } from '../enums/ticket-status.enum';

export interface TicketValues {
  createdAt: string;
  dateCreatedAt: string;
  description?: string;
  issue: string;
  number: number;
  status: TicketStatus;
  statusName: TicketStatusName;
}
