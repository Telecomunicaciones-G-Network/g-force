import type { ReactDiv } from '../../../../types';

import { cn } from '../../../../utils/cn.util';

import styles from './card.module.css';

export const Card = ({
  className = '',
  children,
  ref,
  ...rest
}: Readonly<ReactDiv>) => (
  <div
    className={cn(styles.base, 'bg-chromatic gap-4 p-4', className)}
    ref={ref}
    {...rest}
  >
    {children}
  </div>
);
