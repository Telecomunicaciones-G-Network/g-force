import { cn } from '@gnetwork-ui/utils/cn.util';

import { SidebarHeader } from './components/sidebar-header';

import styles from './sidebar.module.css';

export const Sidebar = () => (
  <aside
    className={cn(
      styles.base,
      'bg-chromatic border-r border-solid border-neutral-200',
    )}
  >
    <SidebarHeader />
  </aside>
);
