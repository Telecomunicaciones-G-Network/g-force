import type { ReactChild, ReactDiv } from '../../../types';

export interface DashboardLayoutProps extends ReactDiv {
  className?: string;
  containerClassName?: string;
  headerContent: ReactChild;
  headerHeight?: string;
  sidebarClassName?: string;
  sidebarContent: ReactChild;
}
