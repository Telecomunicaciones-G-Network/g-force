import type { InvoicePaymentMethod } from '../types';

export interface InvoiceValues {
  id: number;
  amount: number;
  contractId: number;
  dateEmission: string;
  datePayment: string | null;
  documentNumber: string | null;
  paymentMethods: InvoicePaymentMethod[] | null;
  statusCode: string;
  statusName: string;
}
