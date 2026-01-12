import type { InvoiceValues } from '@module-invoice/domain/interfaces';

export interface FloatingModalPaymentReportMobilePaymentProps {
  invoice: InvoiceValues;
  onClose?: () => void;
  onSuccessPayment?: () => void;
}
