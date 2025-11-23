import type { DashboardLayoutContainerVariants } from './dashboard-layout-container.props';

import { cva } from 'class-variance-authority';

import { cn } from '../../../../../utils/cn.util';

import { dasboardLayoutContainerCollapsed } from './variants/dashboard-layout-container-collapse.variant';

export const dashboardLayoutContainerVariants = cva([], {
  variants: {
    collapsed: dasboardLayoutContainerCollapsed,
  },
  compoundVariants: [],
  defaultVariants: {
    collapsed: false,
  },
});

export const getDashboardLayoutContainerClassNames = ({
  className = '',
  ...configVariants
}: DashboardLayoutContainerVariants): string => {
  return cn(dashboardLayoutContainerVariants({ className, ...configVariants }));
};
