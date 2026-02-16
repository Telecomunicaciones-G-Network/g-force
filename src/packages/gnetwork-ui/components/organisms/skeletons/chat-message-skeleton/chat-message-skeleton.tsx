import type { ChatMessageSkeletonProps } from './chat-message-skeleton.props';

import { Skeleton } from '../../../atoms/skeletons/skeleton';
import { Text } from '../../../atoms/texts/text';
import { BubbleModes } from '../../../molecules/blocks/bubble/enums/bubble-modes.enum';

import { cn } from '../../../../utils/cn.util';

import styles from './chat-message-skeleton.module.css';

export const ChatMessageSkeleton = ({
  className = '',
  direction = BubbleModes.UNKNOWN,
  ref,
  time = '',
  username = '',
  ...rest
}: Readonly<ChatMessageSkeletonProps>) => {
  if (!direction) {
    console.warn(
      'Prop direction is missing on ChatMessage component. This component can not be render appropiately.',
    );
  }

  if (!username) {
    console.warn(
      'Prop username is missing on ChatMessage component. This component can not be render appropiately.',
    );
  }

  return (
    <div
      className={cn(
        styles.base,
        direction === 'outgoing' ? 'items-end' : 'items-start',
        className,
      )}
      ref={ref}
      {...rest}
    >
      <div className={styles.base__info}>
        {username && (
          <Text
            as="span"
            className="text-neutral-900"
            level="small"
            scheme="label"
          >
            {username}
          </Text>
        )}
        {username && time && (
          <Text
            as="span"
            className="text-neutral-900"
            level="small"
            scheme="label"
          >
            |
          </Text>
        )}
        {time && (
          <Text
            as="span"
            className="text-neutral-500"
            level="small"
            scheme="label"
          >
            {time}
          </Text>
        )}
      </div>
      <Skeleton className="flex h-[170px] w-[313px]" />
    </div>
  );
};
