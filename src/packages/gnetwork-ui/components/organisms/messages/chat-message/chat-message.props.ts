import type { ReactDiv } from '../../../../types';
import type {
  BubbleStatus,
  BubbleVariants,
} from '../../../molecules/blocks/bubble';
import type { TagColor } from '../../../molecules/tags/tag/types';

export interface ChatMessageProps extends ReactDiv {
  bubbleClassName?: string;
  caption?: string | null;
  createdAt?: string;
  customIconClassName?: string;
  direction: BubbleVariants['mode'];
  forwarded?: boolean;
  forwardedManyTimes?: boolean;
  isBot?: boolean;
  status?: BubbleStatus;
  tagClassName?: string;
  tagColor?: TagColor;
  tagLabel?: string;
  time?: string;
  username: string;
}
