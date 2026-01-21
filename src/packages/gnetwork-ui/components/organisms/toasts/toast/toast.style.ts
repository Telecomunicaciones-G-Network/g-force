import type { ToastVariants } from './toast.props';

import { cva } from 'class-variance-authority';

import { cn } from '../../../../utils/cn.util';

import { toastSchemeVariant } from './variants/toast-scheme.variant';

import styles from './toast.module.css';

export const toastVariants = cva(
  [styles.base, 'init-box', 'bg-tag-green-background w-[min(352px,100%)] max-w-[352px]'],
  {
    variants: {
      scheme: toastSchemeVariant,
    },
    compoundVariants: [],
    defaultVariants: {
      scheme: 'neutral',
    },
  },
);

export const getToastClassNames = ({
  className = '',
  ...configVariants
}: ToastVariants): string => {
  return cn(toastVariants({ className, ...configVariants }));
};
