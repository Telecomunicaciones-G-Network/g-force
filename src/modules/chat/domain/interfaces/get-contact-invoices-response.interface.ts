import type { Invoice } from '@module-invoice/domain/interfaces';

export interface GetContactInvoicesResponse {
  count?: number;
  cycle?: string;
  next: string | null;
  previous: string | null;
  invoices?: Invoice[];
  status: number;
  success: boolean;
}
