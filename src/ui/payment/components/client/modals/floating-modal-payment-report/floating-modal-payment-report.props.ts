import type { Invoice } from '@module-invoice/domain/interfaces';

export interface FloatingModalPaymentReportProps {
  onClose?: VoidFunction;
  invoice: Invoice;
}
