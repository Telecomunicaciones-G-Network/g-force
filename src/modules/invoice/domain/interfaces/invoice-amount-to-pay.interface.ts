/**
 * InvoiceAmountToPay interface
 *
 * @property amount - The total amount to pay in Bs
 * @property ivaAmount - The IVA (tax) amount included in the total
 * @property subTotal - The subtotal amount before IVA
 */

export interface InvoiceAmountToPay {
  amount: number;
  ivaAmount: number;
  subTotal: number;
}
