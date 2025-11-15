import type { ReactChild, ReactDiv } from '../../../types';

export interface DashboardLayoutProps extends ReactDiv {
  className?: string;
  headerContent: ReactChild;
  headerHeight?: string;
  sidebarContent: ReactChild;
}
