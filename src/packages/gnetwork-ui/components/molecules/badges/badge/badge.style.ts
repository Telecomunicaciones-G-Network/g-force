import type { BadgeVariants } from './badge.props';

import { cva } from 'class-variance-authority';

import { cn } from '../../../../utils/cn.util';

import { badgeColors } from './variants/badge-color.variant';

import styles from './badge.module.css';

export const badgeVariants = cva(
  [
    styles.base,
    'font-medium gap-2 justify-center h-4 items-center leading-4 px-1 py-0 rounded-[36px] text-xs tracking-0 w-[25px]',
  ],
  {
    variants: {
      color: badgeColors,
    },
    compoundVariants: [],
    defaultVariants: {
      color: 'default',
    },
  },
);

export const getBadgeClassNames = ({
  className = '',
  ...configVariants
}: BadgeVariants): string => {
  return cn(badgeVariants({ className, ...configVariants }));
};
