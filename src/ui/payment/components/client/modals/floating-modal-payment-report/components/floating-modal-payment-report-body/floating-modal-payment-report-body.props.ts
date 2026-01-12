import type { InvoiceValues } from '@module-invoice/domain/interfaces';

export interface FloatingModalPaymentReportBodyProps {
  invoice: InvoiceValues;
  onSuccessPayment: () => void;
  onClose?: () => void;
}
