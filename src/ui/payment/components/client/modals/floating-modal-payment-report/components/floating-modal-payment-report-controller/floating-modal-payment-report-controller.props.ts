import type { Invoice } from '@module-invoice/domain/interfaces';
import type { PaymentType } from '@module-payment/domain/types';

export interface FloatingModalPaymentReportControllerProps {
  invoice: Invoice;
  onClose?: VoidFunction;
  onSuccessPayment?: VoidFunction;
  paymentType?: PaymentType;
}
