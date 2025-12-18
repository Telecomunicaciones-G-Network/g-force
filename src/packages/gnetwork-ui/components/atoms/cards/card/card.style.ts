import type { CardVariants } from './card.props';

import { cva } from 'class-variance-authority';

import { cn } from '../../../../utils/cn.util';

import { cardBordered } from './variants/card-bordered.variant';
import { cardFullWidth } from './variants/card-fullwidth.variant';

import styles from './card.module.css';

export const cardVariants = cva(
  [styles.base, 'bg-chromatic border-none gap-4 p-4 rounded-lg'],
  {
    variants: {
      bordered: cardBordered,
      fullWidth: cardFullWidth,
    },
    compoundVariants: [],
    defaultVariants: {
      bordered: false,
      fullWidth: false,
    },
  },
);

export const getCardClassNames = ({
  className = '',
  ...configVariants
}: CardVariants): string => {
  return cn(cardVariants({ className, ...configVariants }));
};
