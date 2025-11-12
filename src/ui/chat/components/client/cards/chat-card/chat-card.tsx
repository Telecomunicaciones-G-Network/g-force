'use client';

import type { ChatCardProps } from './chat-card.props';

import Image from 'next/image';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Avatar } from '@gnetwork-ui/components/molecules/avatars/avatar';

import { cn } from '@gnetwork-ui/utils/cn.util';

import styles from './chat-card.module.css';

export const ChatCard = ({
  avatarAlt = '',
  avatarSrc = '',
  isActive = false,
  lastMessage = '',
  lastMessageTime = '',
  onClick,
  username = '',
}: Readonly<ChatCardProps>) => {
  if (!avatarSrc) {
    console.warn(
      'Prop avatarSrc is missing on ChatCard component. This component can not be render appropiately.',
    );
  }

  if (!username) {
    console.warn(
      'Prop username is missing on ChatCard component. This component can not be render appropiately.',
    );
  }

  return (
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
          image={{
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
          }}
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
                {lastMessageTime}
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
              {lastMessage}
            </Text>
          )}
        </div>
      </div>
    </button>
  );
};
