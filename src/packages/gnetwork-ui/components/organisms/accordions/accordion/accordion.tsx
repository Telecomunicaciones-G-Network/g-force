'use client';

import { useState, useRef, useEffect } from 'react';

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
  headerClassName = '',
  hideSeparator = false,
  label = '',
  labelComponent,
  open = false,
  ref,
  ...rest
}: Readonly<AccordionProps>) => {
  const [isOpen, setIsOpen] = useState(open);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const classes = getAccordionClassNames({ className, fullWidth });

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
    const detailsElement = detailsRef.current;
    if (!detailsElement) return;

    const handleToggle = () => {
      setIsOpen(detailsElement.open);
    };

    detailsElement.addEventListener('toggle', handleToggle);

    return () => {
      detailsElement.removeEventListener('toggle', handleToggle);
    };
  }, []);

  if (!children) {
    console.warn(
      'Prop children is missing on Accordion component. This component can not be render appropiately.',
    );
  }

  return (
    <Card className={classes} ref={ref} {...rest}>
      <details ref={detailsRef} className={styles.base__body} open={isOpen}>
        <summary
          className={cn(
            styles.base__header,
            'p-0 text-neutral-900',
            isOpen &&
              !hideSeparator &&
              'border-b border-solid border-neutral-200',
            headerClassName,
          )}
        >
          <div className={styles.base__header_content}>
            {labelComponent || label}
            <MdKeyboardArrowUp className={styles.base__arrow} />
          </div>
        </summary>
        <div className={styles.base__content}>{children}</div>
      </details>
    </Card>
  );
};
