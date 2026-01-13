'use client';

import type { FloatingModalPaymentReportFastDebitProps } from './floating-modal-payment-report-fast-debit.props';

import { useMemo } from 'react';

import {
  MdOutlineAccountBalance,
  MdOutlineLocalPhone,
  MdOutlinePerson,
  MdOutlinePayments,
  MdOutlineDocumentScanner,
} from 'react-icons/md';

import { OTPInput, REGEXP_ONLY_DIGITS } from 'input-otp';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { AmountInputController } from '@ui-core/components/server/inputs/amount-input-controller';
import { PhoneNumberInputController } from '@ui-core/components/client/inputs/phone-number-input-controller';
import { SelectInputController } from '@ui-core/components/client/inputs/select-input-controller';
import { TextInputController } from '@ui-core/components/server/inputs/text-input-controller';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { DocumentNumberInputController } from '@ui-core/components/client/inputs/document-number-input-controller';

import { getFastDebitBanksToSelectOptions } from './utils/get-fast-debit-banks-to-select-options.util';

import { useFloatingModalPaymentReportFastDebit } from './floating-modal-payment-report-fast-debit.hook';

import styles from './floating-modal-payment-report-fast-debit.module.css';

export const FloatingModalPaymentReportFastDebit = ({
  invoice,
  onSuccessPayment = () => null,
}: Readonly<FloatingModalPaymentReportFastDebitProps>) => {
  const {
    banks,
    clearErrors,
    control,
    handleSubmit,
    mode,
    onSubmit,
    isPending,
    otp,
    setOtp,
    countdown,
    validatePayment,
    isProcessing,
  } = useFloatingModalPaymentReportFastDebit({
    invoice,
    onSuccessPayment,
  });

  // Generate stable unique IDs for OTP slots
  const slotIds = useMemo(
    () => Array.from({ length: 8 }, (_, i) => `otp-slot-${Date.now()}-${i}`),
    [],
  );

  return (
    <>
      {mode === 'form' && (
        <form className={styles.base} onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center">
            <Text as="p" align="left" scheme="paragraph" level="xsmall">
              Ingrese el monto a pagar y los datos de su cuenta bancaria.
              Recibirá un SMS o correo con el código temporal (OTP) para
              autorizarnos a debitar los fondos automáticamente.
            </Text>
          </div>
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
                id="floating_modal_payment_report_fast_debit_amount"
                name="amount"
                onClear={clearErrors}
                placeholder="Monto Bs."
                required
              />
            </div>
            <div className={styles.base__input}>
              <SelectInputController
                control={control}
                fullWidth
                leftIcon={
                  <MdOutlineAccountBalance className="fill-neutral-500 min-h-6 min-w-6 size-6" />
                }
                id="floating_modal_payment_report_fast_debit_bank"
                name="bankCode"
                options={getFastDebitBanksToSelectOptions(banks)}
                required
                onClear={clearErrors}
                triggerLabel="Seleccione un banco"
                triggerWrapperClassName="bg-chromatic"
              />
            </div>
            <div className={styles.base__input}>
              <PhoneNumberInputController
                className="bg-chromatic"
                control={control}
                fullWidth
                id="floating_modal_payment_report_fast_debit_phone_number"
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
            <div className="flex gap-2">
              <div className="w-[30%]">
                <SelectInputController
                  control={control}
                  fullWidth
                  leftIcon={
                    <MdOutlineDocumentScanner className="fill-neutral-500 min-h-6 min-w-6 size-6" />
                  }
                  id="floating_modal_payment_report_fast_debit_document_type"
                  name="documentType"
                  options={[
                    {
                      label: 'E',
                      value: 'E',
                    },
                    {
                      label: 'G',
                      value: 'G',
                    },
                    {
                      label: 'J',
                      value: 'J',
                    },
                    {
                      label: 'P',
                      value: 'P',
                    },
                    {
                      label: 'V',
                      value: 'V',
                    },
                  ]}
                  required
                  onClear={clearErrors}
                  triggerLabel="Seleccione el tipo de documento"
                  triggerWrapperClassName="bg-chromatic"
                />
              </div>
              <div className="flex-1">
                <DocumentNumberInputController
                  className="bg-chromatic"
                  control={control}
                  fullWidth
                  id="floating_modal_payment_report_fast_debit_document_number"
                  name="documentNumber"
                  isStatic
                  onClear={clearErrors}
                  placeholder="Número de documento"
                  required
                />
              </div>
            </div>
            <div className={styles.base__input}>
              <TextInputController
                className="bg-chromatic"
                control={control}
                name="clientName"
                onClear={clearErrors}
                isStatic
                leftIcon={
                  <MdOutlinePerson className="fill-neutral-500 min-h-6 min-w-6 size-6" />
                }
                fullWidth
                placeholder="Nombre del cliente"
                required
              />
            </div>
          </div>
          <Button
            color="red"
            loading={isPending}
            disabled={isPending}
            fullWidth
            type="submit"
          >
            Solicitar OTP
          </Button>
        </form>
      )}
      {mode === 'otp' && (
        <div className={styles.base}>
          <div className="flex items-center">
            <Text as="p" align="left" scheme="paragraph" level="xsmall">
              Le llegará el código temporal de autorización (OTP) por SMS o
              correo en breve. Una vez lo reciba, ingrese el OTP en el
              formulario para ejecutar el pago.
            </Text>
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <div className="flex justify-center w-full overflow-x-hidden">
              <OTPInput
                autoFocus
                maxLength={8}
                value={otp}
                onChange={setOtp}
                pattern={REGEXP_ONLY_DIGITS}
                containerClassName="flex gap-1 justify-center"
                render={({ slots }) => (
                  <>
                    {slots.map((slot, idx) => (
                      <div
                        key={slotIds[idx]}
                        className="relative w-8 h-10 text-center text-lg font-semibold border-2 rounded-lg flex items-center justify-center transition-all shrink-0"
                        style={{
                          borderColor: slot.isActive ? '#ef4444' : '#d1d5db',
                          backgroundColor: slot.char ? '#ffffff' : '#ffffff',
                          boxShadow: slot.isActive
                            ? '0 0 0 2px rgba(239, 68, 68, 0.2)'
                            : 'none',
                        }}
                      >
                        {slot.char || ''}
                        {slot.isActive && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-0.5 h-5 bg-red-500 animate-pulse" />
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                )}
              />
            </div>

            <div className="flex justify-center">
              <Text as="p" align="center" scheme="paragraph" level="small">
                Tiempo restante:{' '}
                <span className="font-semibold text-chromatic-inverted">
                  {Math.floor(countdown / 60)}:
                  {String(countdown % 60).padStart(2, '0')}
                </span>
              </Text>
            </div>

            <Button
              color="red"
              disabled={otp.length !== 8 || isProcessing}
              loading={isProcessing}
              fullWidth
              type="button"
              onClick={validatePayment}
            >
              Pagar
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
