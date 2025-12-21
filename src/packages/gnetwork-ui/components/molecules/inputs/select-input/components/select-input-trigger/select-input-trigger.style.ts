import type { SelectInputTriggerVariants } from './select-input-trigger.props';

import { cva } from 'class-variance-authority';

import { cn } from '../../../../../../utils/cn.util';

import { selectInputTriggerFullWidth } from './variants/select-input-trigger-fullwidth.variant';

import styles from './select-input-trigger.module.css';

export const selectInputTriggerVariants = cva(
  [
    styles.base,
    'bg-transparent gap-2 items-center justify-between min-h-[56px] p-2 rounded-sm border border-input border-neutral-200 [&>span]:line-clamp-1',
  ],
  {
    variants: {
      fullWidth: selectInputTriggerFullWidth,
    },
    compoundVariants: [],
    defaultVariants: {
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
