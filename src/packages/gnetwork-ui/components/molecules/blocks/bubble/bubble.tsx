import type { BubbleProps } from './bubble.props';

import { getBubbleClassNames } from './bubble.style';

export const Bubble = ({
  className = '',
  children,
  mode = 'unknown',
  ref,
  ...rest
}: Readonly<BubbleProps>) => {
  const classes = getBubbleClassNames({ className, mode });

  return (
    <div className={classes} ref={ref} {...rest}>
      {children}
    </div>
  );
};
