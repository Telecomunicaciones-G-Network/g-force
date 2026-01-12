'use client';

import type { FloatingModalPaymentReportMobilePaymentManualProps } from './floating-modal-payment-report-mobile-payment-manual.props';

import {
  MdCalendarMonth,
  MdNumbers,
  MdOutlinePayments,
  MdOutlineLocalPhone,
} from 'react-icons/md';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import { DateInputController } from '@ui-core/components/client/inputs/date-input-controller';
import { AmountInputController } from '@ui-core/components/server/inputs/amount-input-controller';
import { PhoneNumberInputController } from '@ui-core/components/client/inputs/phone-number-input-controller';
import { BankReferenceNumberInputController } from '@ui-core/components/client/inputs/bank-reference-number-input-controller';

import { useFloatingModalPaymentReportMobilePaymentManual } from './floating-modal-payment-report-mobile-payment-manual.hook';

import styles from './floating-modal-payment-report-mobile-payment-manual.module.css';

export const FloatingModalPaymentReportMobilePaymentManual = ({
  invoice,
  onClose,
}: Readonly<FloatingModalPaymentReportMobilePaymentManualProps>) => {
  const { clearErrors, control, handleSubmit, isPending, onSubmit } =
    useFloatingModalPaymentReportMobilePaymentManual({ invoice, onClose });

  return (
    <form className={styles.base} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.base__inputs}>
        <div className={styles.base__input}>
          <AmountInputController
            className="bg-chromatic"
            control={control}
            fullWidth
            isStatic
            leftIcon={
              <MdOutlinePayments className="fill-neutral-500 min-h-6 min-w-6 rotate-y-180 size-6" />
            }
            id="floating_modal_payment_report_mobile_payment_manual_amount"
            name="amount"
            onClear={clearErrors}
            placeholder="Monto"
            required
          />
        </div>
        <div className={styles.base__input}>
          <PhoneNumberInputController
            className="bg-chromatic"
            control={control}
            fullWidth
            id="floating_modal_payment_report_mobile_payment_manual_phone_number"
            isStatic
            leftIcon={
              <MdOutlineLocalPhone className="fill-neutral-500 min-h-6 min-w-6 size-6" />
            }
            name="phoneNumber"
            onClear={clearErrors}
            placeholder="Número de teléfono"
            required
          />
        </div>
        <div className={styles.base__input}>
          <BankReferenceNumberInputController
            className="bg-chromatic"
            control={control}
            id="floating_modal_payment_report_mobile_payment_manual_bank_reference_number"
            fullWidth
            isStatic
            leftIcon={
              <MdNumbers className="fill-neutral-500 min-h-6 min-w-6 size-6" />
            }
            name="bankReferenceNumber"
            onClear={clearErrors}
            placeholder="Número de referencia"
            required
          />
        </div>
        <div className={styles.base__input}>
          <DateInputController
            control={control}
            leftIcon={
              <MdCalendarMonth className="fill-neutral-500 min-h-6 min-w-6 size-6" />
            }
            id="floating_modal_payment_report_mobile_payment_manual_date"
            name="date"
            onClear={clearErrors}
            placeholder="Fecha de pago"
            toDate={new Date()}
            triggerClassName="bg-chromatic"
          />
        </div>
      </div>
      <Button
        color="red"
        disabled={isPending}
        fullWidth
        loading={isPending}
        type="submit"
      >
        Reportar Pago
      </Button>
    </form>
  );
};
