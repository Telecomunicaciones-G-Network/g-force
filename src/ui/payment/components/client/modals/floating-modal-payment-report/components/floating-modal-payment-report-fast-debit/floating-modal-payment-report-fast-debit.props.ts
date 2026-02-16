import type { Invoice } from '@module-invoice/domain/interfaces';

export interface FloatingModalPaymentReportFastDebitProps {
  invoice: Invoice;
  onSuccessPayment?: VoidFunction;
}
