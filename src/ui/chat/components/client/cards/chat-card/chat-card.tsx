'use client';

import type { ChatCardProps } from './chat-card.props';

import Image from 'next/image';

import {
  MdEmojiEmotions,
  MdMic,
  MdOutlineDescription,
  MdOutlineImage,
  MdOutlineMap,
  MdOutlinePerson,
  MdOutlineVideoCameraFront,
} from 'react-icons/md';

import { shortString } from '@stringify/utils/short-string.util';
import { isoToTime } from '@timer/utils/iso-to-time.util';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Avatar } from '@gnetwork-ui/components/molecules/avatars/avatar';
import { Badge } from '@gnetwork-ui/components/molecules/badges/badge';
import { Tag } from '@gnetwork-ui/components/molecules/tags/tag';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { MessageTypes } from '@module-chat/domain/enums/message-types.enum';

import { teamTagColorDictionary } from '@ui-chat/dictionaries/team-tag-color.dictionary';

import { CHAT_CARD_MAXIMUM_LAST_MESSAGE_CHARACTERS } from './constants/chat-card-maximum-last-message-characters.constant';

import styles from './chat-card.module.css';

export const ChatCard = ({
  avatarAlt = '',
  avatarSrc = '',
  contactId,
  isActive = false,
  lastMessage = '',
  lastMessageTime = '',
  messageType,
  onClick,
  phoneNumber = '',
  team,
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
        className="self-start max-h-[48px] max-w-[48px] size-12"
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
          {username ||
            (phoneNumber && (
              <Text
                as="span"
                className="text-chromatic-inverted"
                level="small"
                scheme="label"
              >
                {username || phoneNumber}
              </Text>
            ))}
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
        {!lastMessage && (
          <div className={styles.base__icon}>
            {messageType === MessageTypes.AUDIO && (
              <>
                <MdMic className="fill-whatsapp-audio-color min-h-5 min-w-5 size-5" />
                <Text
                  as="span"
                  className="text-neutral-500"
                  level="xsmall"
                  scheme="label"
                >
                  Audio
                </Text>
              </>
            )}
            {messageType === MessageTypes.CONTACTS && (
              <>
                <MdOutlinePerson className="fill-whatsapp-contact-color min-h-5 min-w-5 size-5" />
                <Text
                  as="span"
                  className="text-neutral-500"
                  level="xsmall"
                  scheme="label"
                >
                  Contacto
                </Text>
              </>
            )}
            {messageType === MessageTypes.DOCUMENT && (
              <>
                <MdOutlineDescription className="fill-whatsapp-document-color min-h-5 min-w-5 size-5" />
                <Text
                  as="span"
                  className="text-neutral-500"
                  level="xsmall"
                  scheme="label"
                >
                  Documento
                </Text>
              </>
            )}
            {messageType === MessageTypes.IMAGE && (
              <>
                <MdOutlineImage className="fill-whatsapp-image-color min-h-5 min-w-5 size-5" />
                <Text
                  as="span"
                  className="text-neutral-500"
                  level="xsmall"
                  scheme="label"
                >
                  Imagen
                </Text>
              </>
            )}
            {messageType === MessageTypes.LOCATION && (
              <>
                <MdOutlineMap className="fill-whatsapp-location-color min-h-5 min-w-5 size-5" />
                <Text
                  as="span"
                  className="text-neutral-500"
                  level="xsmall"
                  scheme="label"
                >
                  Localización
                </Text>
              </>
            )}
            {messageType === MessageTypes.STICKER && (
              <>
                <MdEmojiEmotions className="fill-whatsapp-sticker-color min-h-5 min-w-5 size-5" />
                <Text
                  as="span"
                  className="text-neutral-500"
                  level="xsmall"
                  scheme="label"
                >
                  Sticker
                </Text>
              </>
            )}
            {messageType === MessageTypes.VIDEO && (
              <>
                <MdOutlineVideoCameraFront className="fill-whatsapp-video-color min-h-5 min-w-5 size-5" />
                <Text
                  as="span"
                  className="text-neutral-500"
                  level="xsmall"
                  scheme="label"
                >
                  Video
                </Text>
              </>
            )}
          </div>
        )}
        {team?.name && (
          <Tag
            className="min-h-5 px-2 text-xs"
            color={teamTagColorDictionary[team?.id]}
          >
            {team?.name}
          </Tag>
        )}
      </div>
    </div>
    {unreadMessages > 0 && (
      <Badge className="absolute bottom-[36px] right-4" color="red">
        {unreadMessages}
      </Badge>
    )}
  </button>
);
