import type { BadgeProps } from './badge.props';

import { getBadgeClassNames } from './badge.style';

export const Badge = ({
  className,
  children,
  color,
  ref,
  ...rest
}: Readonly<BadgeProps>) => {
  const classes = getBadgeClassNames({ className, color });

  if (!children) {
    console.warn(
      'Prop children is missing on Badge component. This component can not be render appropiately.',
    );
  }

  return (
    <div className={classes} ref={ref} {...rest}>
      {children}
    </div>
  );
};
