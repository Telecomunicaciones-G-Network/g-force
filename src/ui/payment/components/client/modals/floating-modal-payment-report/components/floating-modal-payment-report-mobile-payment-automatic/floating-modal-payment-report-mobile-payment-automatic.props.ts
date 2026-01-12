import type { InvoiceValues } from '@module-invoice/domain/interfaces';

export interface FloatingModalPaymentReportMobilePaymentAutomaticProps {
  invoice: InvoiceValues;
  onClose?: () => void;
  onSuccessPayment?: () => void;
}
