import type { ReactDiv } from '../../../../types';
import type {
  BubbleStatus,
  BubbleVariants,
} from '../../../molecules/blocks/bubble';

export interface ChatImageMessageProps extends Omit<ReactDiv, 'children'> {
  direction: BubbleVariants['mode'];
  status?: BubbleStatus;
  time: string;
  username: string;
}
