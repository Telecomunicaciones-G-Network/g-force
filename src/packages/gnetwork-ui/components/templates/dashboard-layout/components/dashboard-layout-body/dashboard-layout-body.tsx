import type { DashboardLayoutBodyProps } from './dashboard-layout-body.props';

import styles from './dashboard-layout-body.module.css';

export const DashboardLayoutBody = ({
  children,
}: Readonly<DashboardLayoutBodyProps>) => (
  <main className={styles.base}>{children}</main>
);
