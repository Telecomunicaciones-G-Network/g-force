import type { ChatTextMessageProps } from './chat-text-message.props';

import { Text } from '../../../atoms/texts/text';
import { Bubble } from '../../../molecules/blocks/bubble';

import { BubbleStatus } from '../../../molecules/blocks/bubble/enums/bubble-status.enum';

import { cn } from '../../../../utils/cn.util';

import styles from './chat-text-message.module.css';

export const ChatTextMessage = ({
  children,
  className = '',
  direction = 'unknown',
  ref,
  status = 'none',
  time = '',
  username = '',
  ...rest
}: Readonly<ChatTextMessageProps>) => (
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
      mode={direction}
      status={direction === 'incoming' ? BubbleStatus.NONE : status}
    >
      {children}
    </Bubble>
  </div>
);
