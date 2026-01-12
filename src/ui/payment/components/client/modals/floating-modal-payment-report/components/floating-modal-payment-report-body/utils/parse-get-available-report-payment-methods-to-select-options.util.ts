import type { PaymentType } from '@module-payment/domain/types';
import type { SelectItem } from '@gnetwork-ui/components/molecules/inputs/select-input';

import { paymentMethodsHumanizedDictionary } from '@ui-payment/dictionaries/payment-methods-humanized.dictionary';

export const parseGetAvailableReportPaymentMethodsToSelectOptions = (
  paymentMethods?: Record<PaymentType, boolean>,
): SelectItem[] => {
  if (
    !paymentMethods ||
    typeof paymentMethods !== 'object' ||
    Object.keys(paymentMethods).length === 0
  )
    return [];

  return Object.entries(paymentMethods)
    .map(([key, value]) => ({
      disabled: !value,
      label: paymentMethodsHumanizedDictionary[key as PaymentType],
      value: key,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
};
