import type { ReactChild, ReactDiv } from '../../../../types';
import type {
  BubbleStatus,
  BubbleVariants,
} from '../../../molecules/blocks/bubble';

export interface ChatImageMessageProps extends Omit<ReactDiv, 'children'> {
  customImageComponent?: ReactChild;
  direction: BubbleVariants['mode'];
  imageAlt?: string;
  imageUrl?: string;
  status?: BubbleStatus;
  time: string;
  username: string;
}
