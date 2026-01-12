import type { InvoiceValues } from '@module-invoice/domain/interfaces';
import type { PaymentType } from '@module-payment/domain/types';

export interface FloatingModalPaymentReportControllerProps {
  invoice: InvoiceValues;
  onClose?: () => void;
  paymentType?: PaymentType;
}
