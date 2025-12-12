import type { InvoiceValues } from '../interfaces';
import type {
  InvoicePaymentMethod,
  InvoiceStatusCode,
  InvoiceStatusName,
} from '../types';

export class Invoice {
  constructor(
    public id: number,
    public amount: number = 0,
    public contractId: number,
    public dateEmission: string = new Date().toISOString().replace('Z', '000Z'),
    public datePayment: string | null = null,
    public documentNumber: string,
    public paymentMethods: InvoicePaymentMethod[] | null = [],
    public statusCode: InvoiceStatusCode,
    public statusName: InvoiceStatusName,
  ) {}

  public toValues(): InvoiceValues {
    return {
      id: this.id,
      amount: this.amount,
      contractId: this.contractId,
      dateEmission: this.dateEmission,
      datePayment: this.datePayment,
      documentNumber: this.documentNumber,
      paymentMethods: this.paymentMethods,
      statusCode: this.statusCode,
      statusName: this.statusName,
    };
  }
}
