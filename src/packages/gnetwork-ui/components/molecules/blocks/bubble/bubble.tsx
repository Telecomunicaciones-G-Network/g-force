import type { BubbleProps } from './bubble.props';

import { BubbleIconController } from './components/bubble-icon-controller';

import { getBubbleClassNames } from './bubble.style';

export const Bubble = ({
  className = '',
  children,
  customIconClassName = '',
  mode = 'unknown',
  status = 'none',
  ref,
  ...rest
}: Readonly<BubbleProps>) => {
  const classes = getBubbleClassNames({ className, mode });

  return (
    <div className={classes} ref={ref} {...rest}>
      {children}
      <BubbleIconController
        customIconClassName={customIconClassName}
        status={status}
      />
    </div>
  );
};
