import type { AccordionVariants } from './accordion.props';

import { cva } from 'class-variance-authority';

import { cn } from '../../../../utils/cn.util';

import { accordionFullWidth } from './variants/accordion-fullwidth.variant';

import styles from './accordion.module.css';

export const accordionVariants = cva([styles.base], {
  variants: {
    fullWidth: accordionFullWidth,
  },
  compoundVariants: [],
  defaultVariants: {
    fullWidth: false,
  },
});

export const getAccordionClassNames = ({
  className = '',
  ...configVariants
}: AccordionVariants): string => {
  return cn(accordionVariants({ className, ...configVariants }));
};
