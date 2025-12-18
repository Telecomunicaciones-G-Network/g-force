import { FloatingModalPaymentReportProps } from './floating-modal-payment-report.props';

import { FloatingCardModal } from '@gnetwork-ui/components/organisms/modals/floating-card-modal';

import { FloatingModalPaymentReportHeader } from './components/floating-modal-payment-report-header';

export const FloatingModalPaymentReport = ({
  onClose,
}: Readonly<FloatingModalPaymentReportProps>) => (
  <FloatingCardModal>
    <FloatingModalPaymentReportHeader onClose={onClose} />
  </FloatingCardModal>
);
