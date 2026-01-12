import type {
  InvoicePaymentMethod,
  InvoiceStatusCode,
  InvoiceStatusName,
} from '../types';

export interface InvoiceValues {
  bankAssociatedData: {
    bankAccountNumber: string;
    bankAcronym: string;
    bankCode: string;
    bankIdentification: string;
    bankName: string;
    bankPhone: string;
  };
  id: number;
  amount: number;
  contractId: number;
  cycle?: string;
  dateEmission: string;
  datePayment: string | null;
  documentNumber: string | null;
  paymentMethods: InvoicePaymentMethod[] | null;
  statusCode: InvoiceStatusCode;
  statusName: InvoiceStatusName;
}
