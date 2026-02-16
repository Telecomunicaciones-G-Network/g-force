import type { AlertVariants } from './alert.props';

import { cva } from 'class-variance-authority';

import { cn } from '../../../../utils/cn.util';

import { AlertSchemes } from './enums/alert-scheme.enum';

import { alertSchemes } from './variants/alert-scheme.variant';

import styles from './alert.module.css';

export const alertVariants = cva(
  [styles.base, 'init-box', 'w-[min(352px,100%)] max-w-[352px]'],
  {
    variants: {
      scheme: alertSchemes,
    },
    compoundVariants: [],
    defaultVariants: {
      scheme: AlertSchemes.NEUTRAL,
    },
  },
);

export const getAlertClasses = ({
  className = '',
  ...configVariants
}: AlertVariants): string =>
  cn(alertVariants({ className, ...configVariants }));
