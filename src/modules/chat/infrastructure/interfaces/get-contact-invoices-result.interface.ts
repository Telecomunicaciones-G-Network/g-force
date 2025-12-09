import type {
  InvoicePaymentMethod,
  InvoiceStatus,
} from '@module-invoice/domain/types';

export interface GetContactInvoicesResult {
  amount: number;
  date_emission: string;
  date_payment: string | null;
  document_number: string;
  payment_methods: InvoicePaymentMethod[];
  status: InvoiceStatus;
}
