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
 * Invoice entity
 *
 * This entity represents an invoice in the system.
 */
export class Invoice {
  /**
   * Constructor
   *
   * @param id - The ID of the invoice
   * @param amountToPayBs - The amount to pay in Bs
   * @param amountToPayUsd - The amount to pay in USD
   * @param bankAssociatedData - The bank associated data
   * @param contractId - The contract ID
   * @param cycle - The cycle
   * @param dateEmission - The date of emission
   * @param datePayment - The date of payment
   * @param documentNumber - The document number
   * @param paymentMethods - The payment methods
   * @param statusCode - The status code
   * @param statusName - The status name
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
   * Convert the invoice entity to a values object
   *
   * @returns The values object
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
