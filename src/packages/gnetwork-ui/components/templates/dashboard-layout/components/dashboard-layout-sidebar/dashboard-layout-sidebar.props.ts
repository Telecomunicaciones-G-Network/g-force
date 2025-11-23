import type { VariantProps } from 'class-variance-authority';
import type { DashboardLayoutProps } from '../../dashboard-layout.props';

import { dashboardLayoutSidebarVariants } from './dashboard-layout-sidebar.style';

export interface DashboardLayoutSidebarVariants
  extends VariantProps<typeof dashboardLayoutSidebarVariants> {
  className?: string;
}

export type DashboardLayoutSidebarProps = Pick<
  DashboardLayoutProps,
  'sidebarContent'
> &
  DashboardLayoutSidebarVariants;
