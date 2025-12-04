import type { ChatImageMessageProps } from './chat-image-message.props';

import { ResponsiveImage } from '../../../atoms/images/responsive-image';
import { Text } from '../../../atoms/texts/text';
import { Bubble } from '../../../molecules/blocks/bubble';

import { BubbleModes } from '../../../molecules/blocks/bubble/enums/bubble-modes.enum';
import { BubbleStatus } from '../../../molecules/blocks/bubble/enums/bubble-status.enum';

import { cn } from '../../../../utils/cn.util';

import styles from './chat-image-message.module.css';

export const ChatImageMessage = ({
  className = '',
  direction = BubbleModes.UNKNOWN,
  ref,
  status = 'none',
  time = '',
  username = '',
  ...rest
}: Readonly<ChatImageMessageProps>) => (
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
    <Bubble
      className="w-full"
      mode={direction}
      status={direction === 'incoming' ? BubbleStatus.NONE : status}
    >
      <div className="flex h-[154px] w-full">
        <ResponsiveImage
          alt="imagen"
          className="h-full w-full"
          objectFit="cover"
          src="https://picsum.photos/200/300"
        />
      </div>
    </Bubble>
  </div>
);
