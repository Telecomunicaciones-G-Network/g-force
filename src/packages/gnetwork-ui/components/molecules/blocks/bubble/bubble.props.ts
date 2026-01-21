import type { VariantProps } from 'class-variance-authority';
import type { ReactDiv } from '../../../../types';
import type { BubbleMode, BubbleStatus } from './types';

import { bubbleVariants } from './bubble.style';

export interface BubbleVariants extends VariantProps<typeof bubbleVariants> {
  className?: string;
  mode: BubbleMode;
  status?: BubbleStatus;
}

export interface BubbleProps extends ReactDiv, BubbleVariants {
  customIconClassName?: string;
}
