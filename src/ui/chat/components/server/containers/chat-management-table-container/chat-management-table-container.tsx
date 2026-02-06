import type { PropsWithChildren } from 'react';

import styles from './chat-management-table-container.module.css';

/**
 * @name ChatManagementTableContainer
 *
 * @description Container for the chat management table.
 *
 * @property {ReactNode} children - The children to render in the container.
 */
export const ChatManagementTableContainer = ({
  children,
}: Readonly<PropsWithChildren>) => (
  <div className={styles.base}>{children}</div>
);
