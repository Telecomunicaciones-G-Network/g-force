import type { VariantProps } from 'class-variance-authority';
import type { ReactChild, ReactDiv } from '../../../../types';

import { accordionVariants } from './accordion.style';

export interface AccordionVariants
  extends VariantProps<typeof accordionVariants> {
  className?: string;
  fullWidth?: boolean;
}

export interface AccordionProps extends ReactDiv, AccordionVariants {
  hideSeparator?: boolean;
  label?: string;
  labelComponent?: ReactChild;
  open?: boolean;
}
