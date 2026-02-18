'use client';

import { MdBugReport } from 'react-icons/md';

import { Tooltip } from '@gnetwork-ui/components/molecules/tooltips/tooltip';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { sidebarCurrencyRates } from '@ui-core/iterators/sidebar-currency-rates.iterator';

import { SidebarBranch } from '../sidebar-branch';
import { SidebarCurrency } from '../sidebar-currency';
import { SidebarMenu } from '../sidebar-menu';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import { useDashboardLayout } from '@gnetwork-ui/components/templates/dashboard-layout/dashboard-layout.hook';

import styles from './sidebar-body.module.css';

export const SidebarBody = () => {
  const { collapsed: isSidebarCollapsed } = useDashboardLayout();

  return (
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
          <Button
            className="border border-solid border-neutral-200 hover:bg-neutral-200 hover:text-chromatic-inverted"
            fullWidth
            scheme="outline"
          >
            {isSidebarCollapsed ? (
              <Tooltip
                align="start"
                alignOffset={10}
                side="top"
                sideOffset={15}
                triggerComponent={
                  <span className="inline-flex items-center justify-center cursor-pointer">
                    <MdBugReport
                      className="fill-chromatic-inverted min-w-6 min-h-6"
                      size={24}
                    />
                  </span>
                }
                triggerAsChild
              >
                Reportar error
              </Tooltip>
            ) : (
              'Reportar error'
            )}
          </Button>
        </a>
      </div>
    </div>
  );
};
