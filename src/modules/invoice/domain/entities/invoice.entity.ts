import type {
  Invoice as InvoiceValues,
  InvoiceAmountToPay,
  InvoiceBankAssociatedData,
} from '../interfaces';
import type {
  InvoicePaymentMethod,
  InvoiceStatusCode,
  InvoiceStatusName,
} from '../types';

import { InvoiceStatusCodes } from '../enums/invoice-status-codes.enum';
import { InvoiceStatusNames } from '../enums/invoice-status-names.enum';

/**
 * @name Invoice
 *
 * @description This entity represents an invoice in the system.
 *
 * @property {number} id - The ID of the invoice.
 * @property {InvoiceAmountToPay} amountToPayBs - The amount to pay in Bs.
 * @property {InvoiceAmountToPay} amountToPayUsd - The amount to pay in USD.
 * @property {number} amount - The invoice amount.
 * @property {InvoiceBankAssociatedData} bankAssociatedData - The bank associated data.
 * @property {number} contractId - The contract ID.
 * @property {string} [cycle] - The cycle.
 * @property {string} dateEmission - The emission date.
 * @property {string | null} datePayment - The payment date.
 * @property {string | null} documentNumber - The document number.
 * @property {InvoicePaymentMethod[] | null} paymentMethods - The payment methods.
 * @property {InvoiceStatusCode} statusCode - The status code.
 * @property {InvoiceStatusName} statusName - The status name.
 */
export class Invoice {
  /**
   * Constructor
   */
  constructor(
    public id: number,
    public amountToPayBs: InvoiceAmountToPay,
    public amountToPayUsd: InvoiceAmountToPay,
    public amount: number = 0,
    public bankAssociatedData: InvoiceBankAssociatedData,
    public contractId: number,
    public cycle?: string,
    public dateEmission: string = new Date().toISOString().replace('Z', '000Z'),
    public datePayment: string | null = null,
    public documentNumber: string | null = null,
    public paymentMethods: InvoicePaymentMethod[] | null = [],
    public statusCode: InvoiceStatusCode = InvoiceStatusCodes.UNPAID,
    public statusName: InvoiceStatusName = InvoiceStatusNames.UNPAID,
  ) {}

  /**
   * @name toValues
   *
   * @description Convert the invoice to values
   *
   * @returns {InvoiceValues} The invoice values
   */
  public toValues(): InvoiceValues {
    return {
      id: this.id,
      amountToPayBs: this.amountToPayBs,
      amountToPayUsd: this.amountToPayUsd,
      bankAssociatedData: this.bankAssociatedData,
      contractId: this.contractId,
      cycle: this.cycle,
      dateEmission: this.dateEmission,
      datePayment: this.datePayment,
      documentNumber: this.documentNumber,
      paymentMethods: this.paymentMethods,
      statusCode: this.statusCode,
      statusName: this.statusName,
    };
  }
}
