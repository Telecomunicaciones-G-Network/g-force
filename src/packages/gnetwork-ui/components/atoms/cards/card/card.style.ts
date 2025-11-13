import type { CardVariants } from './card.props';

import { cva } from 'class-variance-authority';

import { cn } from '../../../../utils/cn.util';

import { cardFullWidth } from './variants/card-fullwidth.variant';

import styles from './card.module.css';

export const cardVariants = cva(
  [styles.base, 'bg-chromatic border-none gap-4 p-4'],
  {
    variants: {
      fullWidth: cardFullWidth,
    },
    compoundVariants: [],
    defaultVariants: {
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
