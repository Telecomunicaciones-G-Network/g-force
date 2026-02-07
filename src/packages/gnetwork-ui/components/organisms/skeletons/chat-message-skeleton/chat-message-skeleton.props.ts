import type { ReactDiv } from '../../../../types';
import type { BubbleVariants } from '../../../molecules/blocks/bubble';

export interface ChatMessageSkeletonProps extends Omit<ReactDiv, 'children'> {
  direction: BubbleVariants['mode'];
  time?: string;
  username: string;
}
