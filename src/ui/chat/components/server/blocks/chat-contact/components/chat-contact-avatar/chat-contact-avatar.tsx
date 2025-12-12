'use client';

import type { ChatContactAvatarProps } from './chat-contact-avatar.props';

import Image from 'next/image';

import { Icon } from '@gnetwork-ui/components/atoms/icons/icon';
import { ResponsiveImage } from '@gnetwork-ui/components/atoms/images/responsive-image';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { cn } from '@gnetwork-ui/utils/cn.util';
import { usernameToInitials } from '@stringify/utils/username-to-initials.util';

import { useChatContactAvatar } from './chat-contact-avatar.hook';

import styles from './chat-contact-avatar.module.css';

export const ChatContactAvatar = ({
  imageAlt = 'User Contact',
  imageSrc = '',
}: Readonly<ChatContactAvatarProps>) => {
  const { activeContact } = useChatContactAvatar();

  return (
    <div className={cn(styles.base, 'hidden lg:flex')}>
      {imageSrc && (
        <ResponsiveImage
          customImageComponent={
            <Image
              alt={imageAlt}
              className="responsive-image-cover rounded-lg"
              fill
              src={imageSrc}
              sizes="100%"
            />
          }
        />
      )}
      {!imageSrc && activeContact?.name && (
        <div
          className={styles.base__container}
          style={{
            backgroundColor: activeContact?.id
              ? `#${activeContact?.id?.slice(-6)}`
              : '#cccccc',
          }}
        >
          <Text
            as="span"
            className="text-chromatic"
            level="xxlarge"
            scheme="heading"
          >
            {usernameToInitials(activeContact?.name ?? '')}
          </Text>
        </div>
      )}
      {!imageSrc && !activeContact?.name && (
        <div
          className={styles.base__container}
          style={{
            backgroundColor: activeContact?.id
              ? `#${activeContact?.id?.slice(-6)}`
              : '#cccccc',
          }}
        >
          <Icon
            className="min-h-16 min-w-16 size-16"
            color="white"
            fillColor="white"
            name="user"
          />
        </div>
      )}
    </div>
  );
};
