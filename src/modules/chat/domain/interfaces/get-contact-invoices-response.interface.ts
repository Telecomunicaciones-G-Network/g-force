import type { InvoiceValues } from '@module-invoice/domain/interfaces';

export interface GetContactInvoicesResponse {
  count?: number;
  error?: string | null;
  extra?: Record<string, string>;
  next: string | null;
  previous: string | null;
  invoices?: InvoiceValues[];
  status: number;
  success: boolean;
}
