import type { AccordionProps } from './accordion.props';

import { MdKeyboardArrowUp } from 'react-icons/md';

import { Card } from '../../../atoms/cards/card';

import { cn } from '../../../../utils/cn.util';

import { getAccordionClassNames } from './accordion.style';

import styles from './accordion.module.css';

export const Accordion = ({
  className,
  children,
  fullWidth,
  label = '',
  open = false,
  ref,
  ...rest
}: Readonly<AccordionProps>) => {
  const classes = getAccordionClassNames({ className, fullWidth });

  if (!children) {
    console.warn(
      'Prop children is missing on Accordion component. This component can not be render appropiately.',
    );
  }

  return (
    <Card className={classes} ref={ref} {...rest}>
      <details className={styles.base__body} open={open}>
        <summary className={cn(styles.base__header, 'text-neutral-900')}>
          <div className={styles.base__header_content}>
            {label}
            <MdKeyboardArrowUp className={styles.base__arrow} />
          </div>
        </summary>
        <div className={styles.base__content}>{children}</div>
      </details>
    </Card>
  );
};
