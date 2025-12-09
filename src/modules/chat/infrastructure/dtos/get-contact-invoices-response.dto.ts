import type { GetContactInvoicesResult } from '../interfaces/get-contact-invoices-result.interface';

export interface GetContactInvoicesResponseDTO {
  count?: number;
  error?: string | null;
  extra?: Record<string, string>;
  next: string | null;
  previous: string | null;
  results?: GetContactInvoicesResult[];
  status: number;
  success: boolean;
}
