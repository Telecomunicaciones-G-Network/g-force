import type { InvoicePaymentMethod, InvoiceStatus } from '../types';

export interface InvoiceValues {
  amount: number;
  dateEmission: string;
  datePayment: string | null;
  documentNumber: string;
  paymentMethods: InvoicePaymentMethod[] | null;
  status: InvoiceStatus;
}
