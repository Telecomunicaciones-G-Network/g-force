import type { VariantProps } from 'class-variance-authority';
import type { ReactDiv } from '@gnetwork-ui/types';
import type { BubbleMode } from './types';

import { bubbleVariants } from './bubble.style';

export interface BubbleVariants extends VariantProps<typeof bubbleVariants> {
  className?: string;
  mode: BubbleMode;
}

export type BubbleProps = ReactDiv & BubbleVariants;
