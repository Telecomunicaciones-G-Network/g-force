import type { PropsWithChildren } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { DashboardLayoutProps } from '../../dashboard-layout.props';

import { dashboardLayoutContainerVariants } from './dashboard-layout-container.style';

export interface DashboardLayoutContainerVariants
  extends VariantProps<typeof dashboardLayoutContainerVariants> {
  className?: string;
}

export type DashboardLayoutContainerProps =
  PropsWithChildren<DashboardLayoutContainerVariants> &
    Pick<DashboardLayoutProps, 'headerContent' | 'headerHeight'>;
