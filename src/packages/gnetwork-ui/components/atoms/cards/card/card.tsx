import type { CardProps } from './card.props';

import { getCardClassNames } from './card.style';

export const Card = ({
  bordered = false,
  className = '',
  children,
  fullWidth = false,
  ref,
  ...rest
}: Readonly<CardProps>) => {
  const classes = getCardClassNames({ bordered, className, fullWidth });

  if (!children) {
    console.warn(
      'Prop children is missing on Card component. This component can not be render appropiately.',
    );
  }

  return (
    <div className={classes} ref={ref} {...rest}>
      {children}
    </div>
  );
};
