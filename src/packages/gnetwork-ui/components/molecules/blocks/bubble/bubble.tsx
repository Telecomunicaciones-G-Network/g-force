import type { BubbleProps } from './bubble.props';

import { BubbleIconController } from './components/bubble-icon-controller';

import { getBubbleClassNames } from './bubble.style';

import styles from './bubble.module.css';

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
      <div className={styles.base__icon}>
        <BubbleIconController
          customIconClassName={customIconClassName}
          status={status}
        />
      </div>
    </div>
  );
};
