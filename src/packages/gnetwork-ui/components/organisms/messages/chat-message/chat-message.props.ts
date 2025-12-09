import type { ReactDiv } from '../../../../types';
import type {
  BubbleStatus,
  BubbleVariants,
} from '../../../molecules/blocks/bubble';

export interface ChatMessageProps extends ReactDiv {
  caption: string | null;
  bubbleClassName?: string;
  direction: BubbleVariants['mode'];
  isBot?: boolean;
  status?: BubbleStatus;
  time?: string;
  username: string;
}
