import type { ChatMessageProps } from './chat-message.props';

import { MdOutlineSmartToy } from 'react-icons/md';

import { ChatForwardedIndicator } from './chat-forwarded-indicator';

import { Text } from '../../../atoms/texts/text';
import { Bubble } from '../../../molecules/blocks/bubble';
import { Tag } from '../../../molecules/tags/tag';

import { BubbleModes } from '../../../molecules/blocks/bubble/enums/bubble-modes.enum';
import { BubbleStatus } from '../../../molecules/blocks/bubble/enums/bubble-status.enum';
import { TagColors } from '../../../molecules/tags/tag/enums/tag-colors.enum';

import { cn } from '../../../../utils/cn.util';

import styles from './chat-message.module.css';

export const ChatMessage = ({
  bubbleClassName = '',
  caption = null,
  children,
  className = '',
  customIconClassName = '',
  direction = BubbleModes.UNKNOWN,
  forwarded = false,
  forwardedManyTimes = false,
  isBot = false,
  ref,
  status = BubbleStatus.NONE,
  tagClassName = '',
  tagColor = TagColors.GRAY,
  tagLabel = '',
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
        {tagLabel && (
          <Tag
            className={cn(
              'font-medium min-h-4 px-2 py-0.5 rounded-[3px] text-xs',
              tagClassName,
            )}
            color={tagColor}
          >
            {tagLabel}
          </Tag>
        )}
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
        customIconClassName={customIconClassName}
        mode={direction}
        status={direction === 'incoming' ? BubbleStatus.NONE : status}
      >
        <ChatForwardedIndicator forwarded={forwarded} forwardedManyTimes={forwardedManyTimes} />
        {children}
        {caption && caption}
      </Bubble>
    </div>
  );
};
