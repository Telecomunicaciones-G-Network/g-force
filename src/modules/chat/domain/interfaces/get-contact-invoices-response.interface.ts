import type { InvoiceValues } from '@module-invoice/domain/interfaces';

export interface GetContactInvoicesResponse {
  count?: number;
  cycle?: string;
  next: string | null;
  previous: string | null;
  invoices?: InvoiceValues[];
  status: number;
  success: boolean;
}
