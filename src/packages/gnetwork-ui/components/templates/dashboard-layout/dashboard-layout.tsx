import type { DashboardLayoutProps } from './dashboard-layout.props';

import { cn } from '../../../utils/cn.util';

import { DashboardLayoutContainer } from './components/dashboard-layout-container';
import { DashboardLayoutSidebar } from './components/dashboard-layout-sidebar';

import { DashboardLayoutProvider } from './providers/dashboard-layout.provider';

import styles from './dashboard-layout.module.css';

export const DashboardLayout = ({
  children,
  className = '',
  containerClassName,
  headerContent,
  headerHeight,
  ref,
  sidebarClassName,
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
    <DashboardLayoutProvider>
      <div ref={ref} className={cn(styles.base, className)} {...rest}>
        <DashboardLayoutSidebar
          className={sidebarClassName}
          sidebarContent={sidebarContent}
        />
        <DashboardLayoutContainer
          className={containerClassName}
          headerContent={headerContent}
          headerHeight={headerHeight}
        >
          {children}
        </DashboardLayoutContainer>
      </div>
    </DashboardLayoutProvider>
  );
};
