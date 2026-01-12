'use client';

import type { FloatingModalPaymentReportBodyProps } from './floating-modal-payment-report-body.props';

import { SelectInput } from '@gnetwork-ui/components/molecules/inputs/select-input';

import { useFloatingModalPaymentReportBody } from './floating-modal-payment-report-body.hook';
import { FloatingModalPaymentReportController } from '../floating-modal-payment-report-controller';

import styles from './floating-modal-payment-report-body.module.css';

export const FloatingModalPaymentReportBody = ({
  invoice,
  onSuccessPayment,
  onClose,
}: Readonly<FloatingModalPaymentReportBodyProps>) => {
  const {
    onPaymentTypeSelectChange,
    paymentMethodOptions,
    paymentTypeSelected,
  } = useFloatingModalPaymentReportBody();

  return (
    <div className={styles.base}>
      <div className={styles.base__input}>
        <SelectInput
          bordered
          fullWidth
          label="Seleccione un método de pago"
          onValueChange={onPaymentTypeSelectChange}
          options={paymentMethodOptions}
          triggerLabel="Método de pago"
          value={paymentTypeSelected}
        />
      </div>
      <FloatingModalPaymentReportController
        invoice={invoice}
        onClose={onClose}
        paymentType={paymentTypeSelected}
        onSuccessPayment={onSuccessPayment}
      />
    </div>
  );
};
