'use client';

import type { PropsWithChildren } from 'react';

import { DashboardLayoutContext } from '../contexts/dashboard-layout.context';

import { useDashboardLayout } from './dashboard-layout-provider.hook';

export const DashboardLayoutProvider = ({
  children,
}: Readonly<PropsWithChildren>) => {
  const { collapsed, toggleCollapsed } = useDashboardLayout();

  return (
    <DashboardLayoutContext.Provider value={{ collapsed, toggleCollapsed }}>
      {children}
    </DashboardLayoutContext.Provider>
  );
};
