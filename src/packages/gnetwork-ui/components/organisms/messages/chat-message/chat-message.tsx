import type { ChatMessageProps } from './chat-message.props';

import { MdOutlineSmartToy } from 'react-icons/md';

import { Text } from '../../../atoms/texts/text';
import { Bubble } from '../../../molecules/blocks/bubble';

import { BubbleModes } from '../../../molecules/blocks/bubble/enums/bubble-modes.enum';
import { BubbleStatus } from '../../../molecules/blocks/bubble/enums/bubble-status.enum';

import { cn } from '../../../../utils/cn.util';

import styles from './chat-message.module.css';

export const ChatMessage = ({
  bubbleClassName = '',
  children,
  className = '',
  direction = BubbleModes.UNKNOWN,
  isBot = false,
  ref,
  status = BubbleStatus.NONE,
  time = '',
  username = '',
  ...rest
}: Readonly<ChatMessageProps>) => {
  if (!children) {
    console.warn(
      'Prop children is missing on ChatMessage component. This component can not be render appropiately.',
    );
  }

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
        {isBot && (
          <MdOutlineSmartToy className="min-h-6 min-w-6 text-foreground size-6" />
        )}
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
        className={bubbleClassName}
        mode={direction}
        status={direction === 'incoming' ? BubbleStatus.NONE : status}
      >
        {children}
      </Bubble>
    </div>
  );
};
