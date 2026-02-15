import type { ReactDiv } from '../../../../types';

import { cn } from '../../../../utils/cn.util';

import styles from './infinity-scroll-loader.module.css';

/**
 * @name InfinityScrollLoader
 *
 * @description This component renders a loader for the infinity scroll.
 */
export const InfinityScrollLoader = ({
  className = '',
  ref,
  ...rest
}: Readonly<ReactDiv>) => (
  <div ref={ref} className={cn(styles.base, 'h-4 w-16', className)} {...rest}>
    <div className="bg-neutral-300 size-[6px]"></div>
    <div className="bg-neutral-300 size-[6px]"></div>
    <div className="bg-neutral-300 size-[6px]"></div>
  </div>
);
