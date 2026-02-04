import type { PropsWithChildren } from 'react';

import { cn } from '../../../../../../utils/cn.util';

import styles from './modal-card-content.module.css';

/**
 * @name ModalCardContent
 *
 * @description Modal card content component
 *
 * @property {React.ReactNode} children - Content to be displayed inside the modal card
 */
export const ModalCardContent = ({ children }: Readonly<PropsWithChildren>) => (
  <>
    {children && <div className={cn(styles.base, 'gap-4 p-4')}>{children}</div>}
  </>
);
