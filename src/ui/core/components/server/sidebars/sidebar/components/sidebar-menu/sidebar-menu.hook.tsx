'use client';

import { useDashboardLayout } from '@gnetwork-ui/components/templates/dashboard-layout/dashboard-layout.hook';

export const useSidebarMenu = () => {
  const { collapsed: isSidebarCollapsed } = useDashboardLayout();

  return {
    isSidebarCollapsed,
  };
};
