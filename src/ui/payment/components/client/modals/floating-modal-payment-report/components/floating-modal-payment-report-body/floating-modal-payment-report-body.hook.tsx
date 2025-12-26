'use client';

import type { PaymentType } from '@module-payment/domain/types';

import { useState } from 'react';

import { PaymentTypes } from '@module-payment/domain/enums/payment-types.enum';

export const useFloatingModalPaymentReportBody = () => {
  const [paymentTypeSelected, setPaymentTypeSelected] = useState<PaymentType>(
    PaymentTypes.MOBILE_PAYMENT,
  );

  const onPaymentTypeSelectChange = (value: string) =>
    setPaymentTypeSelected(value as PaymentType);

  return {
    onPaymentTypeSelectChange,
    paymentTypeSelected,
  };
};
