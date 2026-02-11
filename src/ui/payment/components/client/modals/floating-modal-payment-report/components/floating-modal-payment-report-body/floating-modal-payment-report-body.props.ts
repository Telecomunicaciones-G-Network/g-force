import type { Invoice } from '@module-invoice/domain/interfaces';

export interface FloatingModalPaymentReportBodyProps {
  invoice: Invoice;
  onSuccessPayment: VoidFunction;
  onClose?: VoidFunction;
}
