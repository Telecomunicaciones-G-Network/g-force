'use client';

import type { FloatingModalPaymentReportMobilePaymentProps } from './floating-modal-payment-report-mobile-payment.props';

import { Separator } from '@gnetwork-ui/components/atoms/separators/separator';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { RadioInput } from '@gnetwork-ui/components/molecules/inputs/radio-input';
import { RadioGroup } from '@gnetwork-ui/components/organisms/inputs/radio-group';

import { FloatingModalPaymentReportFormLayout } from '../../layouts/floating-modal-payment-report-form-layout';

import { FloatingModalPaymentReportMobilePaymentManual } from '../floating-modal-payment-report-mobile-payment-manual';
import { FloatingModalPaymentReportMobilePaymentAutomatic } from '../floating-modal-payment-report-mobile-payment-automatic';

import { FloatingModalPaymentReportMobilePaymentModalities } from './enums/floating-modal-payment-report-mobile-payment-modalities.enum';

import { useFloatingModalPaymentReportMobilePayment } from './floating-modal-payment-report-mobile-payment.hook';

import styles from './floating-modal-payment-report-mobile-payment.module.css';

export const FloatingModalPaymentReportMobilePayment = ({
  invoice,
  onClose,
}: Readonly<FloatingModalPaymentReportMobilePaymentProps>) => {
  const { changeRadioGroupValue, radioGroupValue } =
    useFloatingModalPaymentReportMobilePayment();

  return (
    <FloatingModalPaymentReportFormLayout label="Págo Movil">
      <div className={styles.base__modality}>
        <Text
          as="label"
          align="left"
          className="text-chromatic-inverted"
          level="small"
          scheme="label"
        >
          Modalidad
        </Text>
        <Text
          as="label"
          align="left"
          className="text-neutral-500"
          level="xsmall"
          scheme="label"
        >
          Seleccione cómo desea reportar el pago
        </Text>
      </div>
      <RadioGroup onValueChange={changeRadioGroupValue} value={radioGroupValue}>
        <RadioInput
          id="floating_modal_payment_report_mobile_payment_screenshot"
          label="Solo captura de pantalla"
          value="screenshot"
        />
        <RadioInput
          id="floating_modal_payment_report_mobile_payment_manual"
          label="Llenar datos manualmente"
          value="manual"
        />
      </RadioGroup>
      {radioGroupValue && <Separator />}
      {radioGroupValue ===
        FloatingModalPaymentReportMobilePaymentModalities.MANUAL && (
        <FloatingModalPaymentReportMobilePaymentManual
          invoice={invoice}
          onClose={onClose}
        />
      )}
      {radioGroupValue ===
        FloatingModalPaymentReportMobilePaymentModalities.SCREENSHOT && (
        <FloatingModalPaymentReportMobilePaymentAutomatic
          invoice={invoice}
          onClose={onClose}
        />
      )}
    </FloatingModalPaymentReportFormLayout>
  );
};
