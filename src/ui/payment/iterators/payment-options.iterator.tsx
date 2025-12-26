import type { SelectItem } from '@gnetwork-ui/components/molecules/inputs/select-input';

export const paymentOptions: SelectItem[] = [
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
] as const;
