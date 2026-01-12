import type { InvoiceValues } from '@module-invoice/domain/interfaces';

export interface FloatingModalPaymentReportMobilePaymentManualProps {
  invoice: InvoiceValues;
  onClose?: () => void;
}
