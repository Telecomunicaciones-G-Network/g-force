'use client';

import type { DashboardLayoutContainerProps } from './dashboard-layout-container.props';

import { DashboardLayoutBody } from '../dashboard-layout-body';
import { DashboardLayoutHeader } from '../dashboard-layout-header';

import { useDashboardLayout } from '../../dashboard-layout.hook';

import { getDashboardLayoutContainerClassNames } from './dashboard-layout-container.style';

export const DashboardLayoutContainer = ({
  className,
  children,
  headerContent,
  headerHeight,
}: Readonly<DashboardLayoutContainerProps>) => {
  const { collapsed } = useDashboardLayout();

  const classes = getDashboardLayoutContainerClassNames({
    className,
    collapsed,
  });

  return (
    <div className={classes}>
      <DashboardLayoutHeader headerHeight={headerHeight}>
        {headerContent}
      </DashboardLayoutHeader>
      <DashboardLayoutBody>{children}</DashboardLayoutBody>
    </div>
  );
};
