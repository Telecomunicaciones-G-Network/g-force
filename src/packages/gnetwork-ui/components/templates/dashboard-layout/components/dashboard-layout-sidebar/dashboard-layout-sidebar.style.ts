import type { DashboardLayoutSidebarVariants } from './dashboard-layout-sidebar.props';

import { cva } from 'class-variance-authority';

import { cn } from '../../../../../utils/cn.util';

import { dashboardLayoutSidebarCollapsed } from './variants/dashboard-layout-sidebar-collapsed.variant';

export const dashboardLayoutSidebarVariants = cva(
  ['hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col'],
  {
    variants: {
      collapsed: dashboardLayoutSidebarCollapsed,
    },
    compoundVariants: [],
    defaultVariants: {
      collapsed: false,
    },
  },
);

export const getDashboardLayoutSidebarClassNames = ({
  className = '',
  ...configVariants
}: DashboardLayoutSidebarVariants): string => {
  return cn(dashboardLayoutSidebarVariants({ className, ...configVariants }));
};
