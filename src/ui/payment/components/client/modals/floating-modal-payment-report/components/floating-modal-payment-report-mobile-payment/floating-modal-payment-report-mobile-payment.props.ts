import type { Invoice } from '@module-invoice/domain/interfaces';

export interface FloatingModalPaymentReportMobilePaymentProps {
  invoice: Invoice;
  onClose?: () => void;
  onSuccessPayment?: () => void;
}
