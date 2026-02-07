'use client';

import { use } from 'react';

import { DashboardLayoutContext } from './contexts/dashboard-layout.context';

export const useDashboardLayout = () => {
  const context = use(DashboardLayoutContext);

  if (!context) {
    throw new Error(
      'useDashboardLayout must be used within a DashboardLayoutProvider',
    );
  }

  return context;
};
