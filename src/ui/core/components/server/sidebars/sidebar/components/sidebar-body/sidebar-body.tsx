import { cn } from '@gnetwork-ui/utils/cn.util';

import { sidebarCurrencyRates } from '@ui-core/iterators/sidebar-currency-rates.iterator';

import { SidebarBranch } from '../sidebar-branch';
import { SidebarCurrency } from '../sidebar-currency';
import { SidebarMenu } from '../sidebar-menu';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import styles from './sidebar-body.module.css';

export const SidebarBody = () => (
  <div className={cn(styles.base, 'divide-y divide-neutral-200')}>
    <SidebarBranch />
    <SidebarCurrency currencyRates={sidebarCurrencyRates} />
    <SidebarMenu />

    <div className="flex flex-col gap-4 items-center justify-center mt-auto p-4">
      <a
        className="w-full"
        href="https://forms.gle/YLXcakJXGzC81TEAA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button fullWidth scheme="outline" className="bg-neutral-200">
          Reportar error
        </Button>
      </a>
    </div>
  </div>
);
