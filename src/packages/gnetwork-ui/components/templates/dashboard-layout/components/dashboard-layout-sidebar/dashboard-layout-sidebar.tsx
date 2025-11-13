import type { DashboardLayoutSidebarProps } from './dashboard-layout-sidebar.props';

import styles from './dashboard-layout-sidebar.module.css';

export const DashboardLayoutSidebar = ({
  sidebarContent,
}: Readonly<DashboardLayoutSidebarProps>) => (
  <aside className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[256px] lg:flex-col">
    <div className={styles.base__content}>{sidebarContent}</div>
  </aside>
);
