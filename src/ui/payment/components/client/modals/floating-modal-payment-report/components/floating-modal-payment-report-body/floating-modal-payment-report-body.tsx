'use client';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { SelectInput } from '@gnetwork-ui/components/molecules/inputs/select-input';

import { useFloatingModalPaymentReportBody } from './floating-modal-payment-report-body.hook';
import { FloatingModalPaymentReportController } from '../floating-modal-payment-report-controller';

import styles from './floating-modal-payment-report-body.module.css';

export const FloatingModalPaymentReportBody = () => {
  const {
    onPaymentTypeSelectChange,
    paymentMethodOptions,
    paymentTypeSelected,
  } = useFloatingModalPaymentReportBody();

  return (
    <form className={styles.base}>
      <div className={styles.base__input}>
        <SelectInput
          fullWidth
          onValueChange={onPaymentTypeSelectChange}
          options={paymentMethodOptions}
          value={paymentTypeSelected}
        />
      </div>
      <FloatingModalPaymentReportController paymentType={paymentTypeSelected} />
      <Button color="red" fullWidth type="button">
        Reportar Pago
      </Button>
    </form>
  );
};
