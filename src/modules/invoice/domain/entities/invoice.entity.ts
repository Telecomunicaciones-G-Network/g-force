import type { InvoiceValues } from '../interfaces';
import type {
  InvoicePaymentMethod,
  InvoiceStatusCode,
  InvoiceStatusName,
} from '../types';

import { InvoiceStatusCodes } from '../enums/invoice-status-codes.enum';
import { InvoiceStatusNames } from '../enums/invoice-status-names.enum';

export class Invoice {
  constructor(
    public id: number,
    public amount: number = 0,
    public bankAssociatedData: {
      bankAccountNumber: string;
      bankAcronym: string;
      bankCode: string;
      bankIdentification: string;
      bankName: string;
      bankPhone: string;
    } = {
      bankAccountNumber: '',
      bankAcronym: '',
      bankCode: '',
      bankIdentification: '',
      bankName: '',
      bankPhone: '',
    },
    public contractId: number,
    public cycle?: string,
    public dateEmission: string = new Date().toISOString().replace('Z', '000Z'),
    public datePayment: string | null = null,
    public documentNumber: string | null = null,
    public paymentMethods: InvoicePaymentMethod[] | null = [],
    public statusCode: InvoiceStatusCode = InvoiceStatusCodes.UNPAID,
    public statusName: InvoiceStatusName = InvoiceStatusNames.UNPAID,
  ) {}

  public toValues(): InvoiceValues {
    return {
      id: this.id,
      amount: this.amount,
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
