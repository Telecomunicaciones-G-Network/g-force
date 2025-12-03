import type { SidebarCurrencyRate } from '@ui-core/components/server/sidebars/sidebar';

export const sidebarCurrencyRates: SidebarCurrencyRate[] = [
  {
    id: 1,
    date: '01-10-2025',
    rate: '162,11',
  },
  {
    id: 2,
    date: '10-10-2025',
    rate: '183,13',
  },
] as const;
