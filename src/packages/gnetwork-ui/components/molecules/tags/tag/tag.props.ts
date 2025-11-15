import type { VariantProps } from 'class-variance-authority';
import type { ReactDiv } from '../../../../types';
import type { TagColor } from './types';

import { tagVariants } from './tag.style';

export type TagVariants = VariantProps<typeof tagVariants> & {
  className?: string;
  color?: TagColor;
};

export type TagProps = ReactDiv & TagVariants;
