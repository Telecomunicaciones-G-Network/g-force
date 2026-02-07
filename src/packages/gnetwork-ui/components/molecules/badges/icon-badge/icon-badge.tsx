import type { IconBadgeProps } from './icon-badge.props';

import { cn } from '../../../../utils/cn.util';

import styles from './icon-badge.module.css';

export const IconBadge = ({
  className = '',
  icon,
  ref,
  ...rest
}: Readonly<IconBadgeProps>) => {
  if (!icon) {
    console.warn(
      'Prop icon is missing on IconBadge component. This component can not be render appropiately.',
    );
  }

  return (
    <div
      className={cn(
        styles.base,
        'bg-red-100 color-red-600 fill-red-600 items-center justify-center min-h-[48px] min-w-[48px] rounded-xl',
        className,
      )}
      ref={ref}
      {...rest}
    >
      {icon}
    </div>
  );
};
