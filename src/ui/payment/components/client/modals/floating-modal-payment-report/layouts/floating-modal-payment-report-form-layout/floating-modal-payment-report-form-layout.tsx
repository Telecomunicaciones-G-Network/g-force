import type { FloatingModalPaymentReportFormLayoutProps } from './floating-modal-payment-report-form-layout.props';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import styles from './floating-modal-payment-report-form-layout.module.css';

export const FloatingModalPaymentReportFormLayout = ({
  children,
  label = '',
}: Readonly<FloatingModalPaymentReportFormLayoutProps>) => (
  <div className={styles.base}>
    <Text
      as="label"
      align="left"
      className="text-chromatic-inverted"
      level="medium"
      scheme="label"
    >
      {label ? `Reportar ${label}` : 'Reportar Pago'}
    </Text>
    {children}
  </div>
);
