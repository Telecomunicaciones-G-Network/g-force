import type { PaymentType } from '@module-payment/domain/types';

export const paymentMethodsHumanizedDictionary: Record<PaymentType, string> = {
  FAST_DEBIT: 'Debito inmediato',
  MOBILE_PAYMENT: 'Pago móvil',
  ZELLE: 'Zelle',
} as const;
