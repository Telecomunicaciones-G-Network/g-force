import type { ReactDiv } from '../../../../types';
import type { BubbleVariants } from '../../../molecules/blocks/bubble';
import type { BubbleStatus } from '../../../molecules/blocks/bubble/types';

export interface ChatTextMessageProps extends ReactDiv {
  className?: string;
  direction: BubbleVariants['mode'];
  status?: BubbleStatus;
  time: string;
  username: string;
}
