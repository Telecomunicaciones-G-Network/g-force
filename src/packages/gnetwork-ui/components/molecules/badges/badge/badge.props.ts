import type { VariantProps } from 'class-variance-authority';
import type { ReactDiv } from '../../../../types';
import { BadgeColor } from './types';

import { badgeVariants } from './badge.style';

export interface BadgeVariants extends VariantProps<typeof badgeVariants> {
  className?: string;
  color?: BadgeColor;
}

export type BadgeProps = ReactDiv & BadgeVariants;
