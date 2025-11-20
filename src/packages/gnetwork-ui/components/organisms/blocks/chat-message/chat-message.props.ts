// PENDING:

import type { ReactDiv } from '../../../../types';
import type { BubbleVariants } from '../../../molecules/blocks/bubble';

export interface ChatMessageProps extends ReactDiv {
  className?: string;
  direction: BubbleVariants['mode'];
  time: string;
  username: string;
}
