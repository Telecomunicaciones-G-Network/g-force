import type { InvoiceValues } from '@module-invoice/domain/interfaces';

export interface FloatingModalPaymentReportFastDebitProps {
  invoice: InvoiceValues;
  onSuccessPayment?: () => void;
}
