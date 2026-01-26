import type { TicketStatusCode, TicketStatusName } from '../types';

export interface TicketValues {
  id: number; // Optional until backend adds it to list endpoint
  contractId: number;
  createdAt: string;
  dateCreatedAt: string;
  description?: string;
  issue: string;
  number: number;
  statusCode: TicketStatusCode;
  statusName: TicketStatusName;
}
