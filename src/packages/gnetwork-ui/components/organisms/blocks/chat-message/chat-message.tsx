import type { ChatMessageProps } from './chat-message.props';

import { Text } from '../../../atoms/texts/text';
import { Bubble } from '../../../molecules/blocks/bubble';

import { cn } from '../../../../utils/cn.util';

import styles from './chat-message.module.css';

export const ChatMessage = ({
  children,
  className = '',
  direction = 'unknown',
  ref,
  time = '',
  username = '',
  ...rest
}: Readonly<ChatMessageProps>) => (
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
          className="text-neutral-100"
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
    <Bubble mode={direction}>{children}</Bubble>
  </div>
);
