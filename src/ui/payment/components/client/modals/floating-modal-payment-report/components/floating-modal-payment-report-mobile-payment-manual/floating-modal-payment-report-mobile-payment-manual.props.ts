import type { Invoice } from '@module-invoice/domain/interfaces';

export interface FloatingModalPaymentReportMobilePaymentManualProps {
  invoice: Invoice;
  onSuccessPayment?: () => void;
  onClose?: () => void;
}
