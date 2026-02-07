import type { SkeletonProps } from './skeleton.props';

import { cn } from '../../../../utils/cn.util';

import styles from './skeleton.module.css';

/**
 * Skeleton component
 *
 * Renders a styled div to serve as a loading placeholder ("skeleton loader").
 * Applies a pulsing animation, rounded corners, and full width by default.
 *
 * @param className Optionally, additional class names to apply.
 * @param ref Ref to forward to the root div element.
 * @param rest Any other valid div properties.
 */
export const Skeleton = ({
  className = '',
  ref,
  ...rest
}: Readonly<SkeletonProps>) => (
  <div
    className={cn(
      styles.base,
      'animate-pulse bg-neutral-200 h-10 rounded-lg w-full',
      className,
    )}
    ref={ref}
    {...rest}
  />
);
