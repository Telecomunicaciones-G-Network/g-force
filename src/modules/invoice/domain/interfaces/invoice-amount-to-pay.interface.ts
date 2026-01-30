/**
 * @name InvoiceAmountToPay
 *
 * @description This interface represents the amount to pay for an invoice.
 *
 * @property {number} amount - The total amount to pay in Bs
 * @property {number} ivaAmount - The IVA (tax) amount included in the total
 * @property {number} subTotal - The subtotal amount before IVA
 */
export interface InvoiceAmountToPay {
  amount: number;
  ivaAmount: number;
  subTotal: number;
}
