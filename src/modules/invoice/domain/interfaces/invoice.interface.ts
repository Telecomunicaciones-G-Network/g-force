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
 * Invoice interface
 *
 * @property id - The invoice ID
 * @property amountToPayBs - The amount to pay in Bs
 * @property amountToPayUsd - The amount to pay in USD
 * @property bankAssociatedData - The bank associated data
 * @property contractId - The contract ID
 * @property cycle - The cycle
 * @property dateEmission - The date of emission
 * @property datePayment - The date of payment
 * @property documentNumber - The document number
 * @property paymentMethods - The payment methods
 * @property statusCode - The status code
 * @property statusName - The status name
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
  documentNumber: string | null;
  paymentMethods: InvoicePaymentMethod[] | null;
  statusCode: InvoiceStatusCode;
  statusName: InvoiceStatusName;
}
