import { cn } from '@gnetwork-ui/utils/cn.util';

import { sidebarCurrencyRates } from '@ui-core/iterators/sidebar-currency-rates.iterator';

import { SidebarBranch } from '../sidebar-branch';
import { SidebarCurrency } from '../sidebar-currency';
import { SidebarMenu } from '../sidebar-menu';

import styles from './sidebar-body.module.css';

export const SidebarBody = () => (
  <div className={cn(styles.base, 'divide-y divide-neutral-200')}>
    <SidebarBranch />
    <SidebarCurrency currencyRates={sidebarCurrencyRates} />
    <SidebarMenu />
  </div>
);
