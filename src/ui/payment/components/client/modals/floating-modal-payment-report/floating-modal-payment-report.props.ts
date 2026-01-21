import type { Invoice } from '@module-invoice/domain/interfaces';

export interface FloatingModalPaymentReportProps {
  onClose?: () => void;
  invoice: Invoice;
}
