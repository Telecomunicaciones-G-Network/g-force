import type { InvoiceValues } from '../interfaces';
import type { InvoicePaymentMethod, InvoiceStatus } from '../types';

export class InvoiceEntity {
  constructor(
    public amount: number = 0,
    public dateEmission: string = new Date().toISOString().replace('Z', '000Z'),
    public datePayment: string | null = null,
    public documentNumber: string,
    public paymentMethods: InvoicePaymentMethod[] | null = [],
    public status: InvoiceStatus,
  ) {}

  public toValues(): InvoiceValues {
    return {
      amount: this.amount,
      dateEmission: this.dateEmission,
      datePayment: this.datePayment,
      documentNumber: this.documentNumber,
      paymentMethods: this.paymentMethods,
      status: this.status,
    };
  }
}
