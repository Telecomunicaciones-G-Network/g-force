import type {
  InvoiceAmountToPay,
  InvoiceBankAssociatedData,
} from '../interfaces';
import type {
  InvoicePaymentMethod,
  InvoiceStatusCode,
  InvoiceStatusName,
} from '../types';

/**
 * @name Invoice
 *
 * @description This interface represents an invoice in the system.
 *
 * @property {number} id - The invoice ID
 * @property {InvoiceAmountToPay} amountToPayBs - The amount to pay in Bs
 * @property {InvoiceAmountToPay} amountToPayUsd - The amount to pay in USD
 * @property {InvoiceBankAssociatedData} bankAssociatedData - The bank associated data
 * @property {number} contractId - The contract ID
 * @property {string} [cycle] - The cycle
 * @property {string} dateEmission - The date of emission
 * @property {string | null} datePayment - The date of payment
 * @property {string | null} documentNumber - The document number
 * @property {InvoicePaymentMethod[] | null} paymentMethods - The payment methods
 * @property {InvoiceStatusCode} statusCode - The status code
 * @property {InvoiceStatusName} statusName - The status name
 */
export interface Invoice {
  id: number;
  amountToPayBs: InvoiceAmountToPay;
  amountToPayUsd: InvoiceAmountToPay;
  bankAssociatedData: InvoiceBankAssociatedData;
  contractId: number;
  cycle?: string;
  dateEmission: string;
  datePayment: string | null;
  datetime_payment: string | null;
  documentNumber: string | null;
  paymentMethods: InvoicePaymentMethod[] | null;
  statusCode: InvoiceStatusCode;
  statusName: InvoiceStatusName;
}
