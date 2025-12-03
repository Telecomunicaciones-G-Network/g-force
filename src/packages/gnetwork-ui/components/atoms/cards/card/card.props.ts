import type { VariantProps } from 'class-variance-authority';
import type { ReactDiv } from '../../../../types';

import { cardVariants } from './card.style';

export interface CardVariants extends VariantProps<typeof cardVariants> {
  bordered?: boolean;
  className?: string;
  fullWidth?: boolean;
}

export type CardProps = ReactDiv & CardVariants;
