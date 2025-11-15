import type { DashboardLayoutProps } from './dashboard-layout.props';

import { cn } from '../../../utils/cn.util';

import { DashboardLayoutBody } from './components/dashboard-layout-body';
import { DashboardLayoutHeader } from './components/dashboard-layout-header';
import { DashboardLayoutSidebar } from './components/dashboard-layout-sidebar';

import styles from './dashboard-layout.module.css';

export const DashboardLayout = ({
  children,
  className = '',
  headerContent,
  headerHeight,
  ref,
  sidebarContent,
  ...rest
}: Readonly<DashboardLayoutProps>) => {
  if (!children) {
    console.warn(
      'Prop children is missing on DashboardLayout component. This component can not be render appropiately.',
    );
  }

  if (!headerContent) {
    console.warn(
      'Prop headerContent is missing on DashboardLayout component. This component can not be render appropiately.',
    );
  }

  if (!sidebarContent) {
    console.warn(
      'Prop sidebarContent is missing on DashboardLayout component. This component can not be render appropiately.',
    );
  }

  return (
    <div ref={ref} className={cn(styles.base, className)} {...rest}>
      <DashboardLayoutSidebar sidebarContent={sidebarContent} />
      <div className="lg:pl-[256px]">
        <DashboardLayoutHeader headerHeight={headerHeight}>
          {headerContent}
        </DashboardLayoutHeader>
        <DashboardLayoutBody>{children}</DashboardLayoutBody>
      </div>
    </div>
  );
};
