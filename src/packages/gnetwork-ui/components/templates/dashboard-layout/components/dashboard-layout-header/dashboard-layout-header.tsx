import type { DashboardLayoutHeaderProps } from './dashboard-layout-header.props';

import { cn } from '../../../../../utils/cn.util';

import styles from './dashboard-layout-header.module.css';

export const DashboardLayoutHeader = ({
  children,
  headerHeight,
}: Readonly<DashboardLayoutHeaderProps>) => (
  <header
    className={cn(styles.base, 'h-[72px]')}
    style={{
      height: headerHeight,
    }}
  >
    {children}
  </header>
);
