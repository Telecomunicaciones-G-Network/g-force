import type { FloatingModalPaymentReportControllerProps } from './floating-modal-payment-report-controller.props';

import { PaymentTypes } from '@module-payment/domain/enums/payment-types.enum';

import { FloatingModalPaymentReportFastDebit } from '../floating-modal-payment-report-fast-debit';
import { FloatingModalPaymentReportMobilePayment } from '../floating-modal-payment-report-mobile-payment';

export const FloatingModalPaymentReportController = ({
  invoice,
  onClose,
  onSuccessPayment,
  paymentType,
}: Readonly<FloatingModalPaymentReportControllerProps>) => {
  switch (paymentType) {
    case PaymentTypes.FAST_DEBIT:
      return (
        <FloatingModalPaymentReportFastDebit
          invoice={invoice}
          onSuccessPayment={onSuccessPayment}
        />
      );
    case PaymentTypes.MOBILE_PAYMENT:
      return (
        <FloatingModalPaymentReportMobilePayment
          invoice={invoice}
          onClose={onClose}
          onSuccessPayment={onSuccessPayment}
        />
      );
    case PaymentTypes.ZELLE:
      return 'Zelle';
    default:
      return null;
  }
};
