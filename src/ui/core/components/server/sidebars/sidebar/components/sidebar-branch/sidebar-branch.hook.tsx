'use client';

import { useDashboardLayout } from '@gnetwork-ui/components/templates/dashboard-layout/dashboard-layout.hook';

export const useSidebarBranch = () => {
  const { collapsed } = useDashboardLayout();

  return {
    isSidebarCollapsed: collapsed,
  };
};
