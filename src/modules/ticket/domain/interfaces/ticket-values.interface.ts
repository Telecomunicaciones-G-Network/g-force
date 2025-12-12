import type { TicketStatusCode, TicketStatusName } from '../types';

export interface TicketValues {
  contractId: number;
  createdAt: string;
  dateCreatedAt: string;
  description?: string;
  issue: string;
  number: number;
  statusCode: TicketStatusCode;
  statusName: TicketStatusName;
}
