import type { SelectInputTriggerVariants } from './select-input-trigger.props';

import { cva } from 'class-variance-authority';

import { cn } from '../../../../../../utils/cn.util';

import { selectInputTriggerBordered } from './variants/select-input-trigger-bordered.variant';
import { selectInputTriggerFullWidth } from './variants/select-input-trigger-fullwidth.variant';

import styles from './select-input-trigger.module.css';

export const selectInputTriggerVariants = cva(
  [
    styles.base,
    'bg-transparent gap-2 items-center justify-between rounded-sm border border-input border-neutral-200 [&>span]:line-clamp-1',
  ],
  {
    variants: {
      bordered: selectInputTriggerBordered,
      fullWidth: selectInputTriggerFullWidth,
    },
    compoundVariants: [],
    defaultVariants: {
      bordered: false,
      fullWidth: false,
    },
  },
);

export const getSelectInputTriggerClassNames = ({
  className = '',
  ...configVariants
}: SelectInputTriggerVariants): string => {
  return cn(selectInputTriggerVariants({ className, ...configVariants }));
};
