import type { InvoiceValues } from '@module-invoice/domain/interfaces';

export interface FloatingModalPaymentReportProps {
  onClose?: () => void;
  invoice: InvoiceValues;
}
