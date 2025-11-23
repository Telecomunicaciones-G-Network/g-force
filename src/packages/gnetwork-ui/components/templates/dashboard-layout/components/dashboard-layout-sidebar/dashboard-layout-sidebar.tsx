'use client';

import type { DashboardLayoutSidebarProps } from './dashboard-layout-sidebar.props';

import { useDashboardLayout } from '../../dashboard-layout.hook';

import { getDashboardLayoutSidebarClassNames } from './dashboard-layout-sidebar.style';

import styles from './dashboard-layout-sidebar.module.css';

export const DashboardLayoutSidebar = ({
  className,
  sidebarContent,
}: Readonly<DashboardLayoutSidebarProps>) => {
  const { collapsed } = useDashboardLayout();

  const classes = getDashboardLayoutSidebarClassNames({
    className,
    collapsed,
  });

  return (
    <aside className={classes}>
      <div className={styles.base__content}>{sidebarContent}</div>
    </aside>
  );
};
