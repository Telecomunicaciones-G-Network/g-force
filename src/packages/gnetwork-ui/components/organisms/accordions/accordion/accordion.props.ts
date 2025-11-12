import type { VariantProps } from 'class-variance-authority';
import type { ReactDiv } from '../../../../types';

import { accordionVariants } from './accordion.style';

export interface AccordionVariants
  extends VariantProps<typeof accordionVariants> {
  className?: string;
  fullWidth?: boolean;
}

export interface AccordionProps extends ReactDiv, AccordionVariants {
  label?: string;
  open?: boolean;
}
