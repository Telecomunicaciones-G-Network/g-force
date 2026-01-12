import type { FloatingModalPaymentReportControllerProps } from './floating-modal-payment-report-controller.props';

import { PaymentTypes } from '@module-payment/domain/enums/payment-types.enum';

import { FloatingModalPaymentReportMobilePayment } from '../floating-modal-payment-report-mobile-payment';

export const FloatingModalPaymentReportController = ({
  invoice,
  onClose,
  paymentType,
}: Readonly<FloatingModalPaymentReportControllerProps>) => {
  switch (paymentType) {
    case PaymentTypes.FAST_DEBIT:
      return 'Debito inmediato';
    case PaymentTypes.MOBILE_PAYMENT:
      return (
        <FloatingModalPaymentReportMobilePayment
          invoice={invoice}
          onClose={onClose}
        />
      );
    case PaymentTypes.ZELLE:
      return 'Zelle';
    default:
      return null;
  }
};
