import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { SelectInput } from '@gnetwork-ui/components/molecules/inputs/select-input';

import styles from './floating-modal-payment-report-body.module.css';

export const FloatingModalPaymentReportBody = () => (
  <form className={styles.base}>
    <div className={styles.base__input}>
      <SelectInput
        defaultValue="MOBILE_PAYMENT"
        fullWidth
        options={[
          {
            disabled: true,
            label: 'Debito Inmediato',
            value: 'FAST_DEBIT',
          },
          {
            disabled: false,
            label: 'Pago Móvil',
            value: 'MOBILE_PAYMENT',
          },
          {
            disabled: true,
            label: 'Zelle',
            value: 'ZELLE',
          },
        ]}
      />
    </div>
    <Button color="red" fullWidth type="button">
      Reportar Pago
    </Button>
  </form>
);
