import type { Invoice } from '@module-invoice/domain/interfaces';

export interface FloatingModalPaymentReportMobilePaymentAutomaticProps {
  invoice: Invoice;
  onClose?: () => void;
  onSuccessPayment?: () => void;
}
