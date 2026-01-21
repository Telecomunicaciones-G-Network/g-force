import type { TagVariants } from './tag.props';

import { cva } from 'class-variance-authority';

import { cn } from '../../../../utils/cn.util';

import { tagColors } from './variants/tag-color.variant';

import styles from './tag.module.css';

export const tagVariants = cva(
  [styles.base, 'font-normal min-h-6 py-0 px-4 rounded-sm text-sm'],
  {
    variants: {
      color: tagColors,
    },
    compoundVariants: [],
    defaultVariants: {
      color: 'gray',
    },
  },
);

export const getTagClassNames = ({
  className = '',
  ...configVariants
}: TagVariants): string => {
  return cn(tagVariants({ className, ...configVariants }));
};
