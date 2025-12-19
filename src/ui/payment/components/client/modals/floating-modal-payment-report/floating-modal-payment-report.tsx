import { FloatingModalPaymentReportProps } from './floating-modal-payment-report.props';

import { FloatingCardModal } from '@gnetwork-ui/components/organisms/modals/floating-card-modal';

import { FloatingModalPaymentReportBody } from './components/floating-modal-payment-report-body';
import { FloatingModalPaymentReportHeader } from './components/floating-modal-payment-report-header';

export const FloatingModalPaymentReport = (
  props: Readonly<FloatingModalPaymentReportProps>,
) => (
  <FloatingCardModal>
    <FloatingModalPaymentReportHeader {...props} />
    <FloatingModalPaymentReportBody />
  </FloatingCardModal>
);
