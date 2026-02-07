import type { PaymentType } from '@module-payment/domain/types';

import { PaymentTypes } from '@module-payment/domain/enums/payment-types.enum';

export const getReportPaymentMethodsDictionary = (
  paymentMethods: Record<string, boolean>,
): Record<PaymentType, boolean> => {
  const paymentMethodsMap: Record<string, PaymentType> = {
    pago_movil: PaymentTypes.MOBILE_PAYMENT,
    zelle: PaymentTypes.ZELLE,
    fast_debit: PaymentTypes.FAST_DEBIT,
  };

  const result: Partial<Record<PaymentType, boolean>> = {};

  Object.entries(paymentMethods).forEach(([key, value]) => {
    const mappedKey = paymentMethodsMap[key];
    if (mappedKey) {
      result[mappedKey] = value;
    }
  });

  return result as Record<PaymentType, boolean>;
};
