'use client';

import type { ChatCardProps } from './chat-card.props';

import Image from 'next/image';

import { shortString } from '@stringify/utils/short-string.util';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Avatar } from '@gnetwork-ui/components/molecules/avatars/avatar';
import { Badge } from '@gnetwork-ui/components/molecules/badges/badge';

import { cn } from '@gnetwork-ui/utils/cn.util';
import { isoToTime } from '@timer/utils/iso-to-time.util';

import { CHAT_CARD_MAXIMUM_LAST_MESSAGE_CHARACTERS } from './constants/chat-card-maximum-last-message-characters.constant';

import styles from './chat-card.module.css';

export const ChatCard = ({
  avatarAlt = '',
  avatarSrc = '',
  contactId,
  isActive = false,
  lastMessage = '',
  lastMessageTime = '',
  onClick,
  unreadMessages = 0,
  username = '',
}: Readonly<ChatCardProps>) => (
  <button
    className={cn(
      styles.base,
      'border-y border-solid border-neutral-200',
      isActive
        ? 'bg-chromatic border-l-4 border-l-neutral-900'
        : 'bg-background',
    )}
    onClick={onClick}
    type="button"
  >
    <div className={styles.base__container}>
      <Avatar
        customBackgroundColor={contactId && `#${contactId?.slice(-6)}`}
        image={
          avatarSrc
            ? {
                customImageComponent: (
                  <Image
                    alt={avatarAlt ?? 'Avatar'}
                    className="responsive-image-cover"
                    fill
                    priority
                    sizes="100%"
                    src={avatarSrc}
                  />
                ),
              }
            : undefined
        }
        username={username}
      />
      <div className={styles.base__content}>
        <div className={styles.base__texts}>
          {username && (
            <Text
              as="span"
              className="text-chromatic-inverted"
              level="small"
              scheme="label"
            >
              {username}
            </Text>
          )}
          {lastMessageTime && (
            <Text
              as="span"
              className="text-neutral-500"
              level="xsmall"
              scheme="label"
            >
              {isoToTime(lastMessageTime)}
            </Text>
          )}
        </div>
        {lastMessage && (
          <Text
            as="p"
            className="text-neutral-500"
            level="xsmall"
            scheme="label"
          >
            {shortString(
              lastMessage,
              CHAT_CARD_MAXIMUM_LAST_MESSAGE_CHARACTERS,
            )}
          </Text>
        )}
      </div>
    </div>
    {unreadMessages > 0 && (
      <Badge className="absolute bottom-[31px] right-4" color="red">
        {unreadMessages}
      </Badge>
    )}
  </button>
);
