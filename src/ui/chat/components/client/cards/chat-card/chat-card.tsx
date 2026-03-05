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
  MdOutlineTimelapse,
  MdOutlineVideoCameraFront,
} from 'react-icons/md';

import { shortString } from '@stringify/utils/short-string.util';
import {
  isoToFullDate,
  isoToRelativeDate,
} from '@timer/utils/iso-to-relative-date.util';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Avatar } from '@gnetwork-ui/components/molecules/avatars/avatar';
import { Badge } from '@gnetwork-ui/components/molecules/badges/badge';
import { Tag } from '@gnetwork-ui/components/molecules/tags/tag';

import { cn } from '@gnetwork-ui/utils/cn.util';
import { capitalizeWords } from '@stringify/utils/capitalize-words.util';

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
          {(username || phoneNumber) && (
            <div
              className="flex-1 min-w-0 truncate"
              title={capitalizeWords(username) || phoneNumber}
            >
              <Text
                as="span"
                className="text-chromatic-inverted block truncate"
                level="small"
                scheme="label"
              >
                {capitalizeWords(username) || phoneNumber}
              </Text>
            </div>
          )}
          {lastMessageTime && (
            <div className={styles.timestamp}>
              <Text
                as="span"
                className={cn('text-neutral-500', styles.timestamp__relative)}
                level="xsmall"
                scheme="label"
              >
                {isoToRelativeDate(lastMessageTime)}
              </Text>
              <Text
                as="span"
                className={cn('text-neutral-500', styles.timestamp__full)}
                level="xsmall"
                scheme="label"
              >
                {isoToFullDate(lastMessageTime)}
              </Text>
            </div>
          )}
        </div>
        <div className={styles.base__icon}>
          {lastMessage && messageType === MessageTypes.TEXT && (
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

          {lastMessage &&
            (messageType === MessageTypes.TEMPLATE ||
              messageType === MessageTypes.FLOW_BUTTON ||
              messageType === MessageTypes.FLOW_COMPLETION ||
              messageType === MessageTypes.INTERACTIVE_BUTTONS ||
              messageType === MessageTypes.INTERACTIVE_BUTTON_REPLY ||
              messageType === MessageTypes.INTERACTIVE_LIST_OPTIONS ||
              messageType === MessageTypes.INTERACTIVE_LIST_SELECTION ||
              messageType === MessageTypes.INTERACTIVE_URL_BUTTON) && (
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
          {messageType === MessageTypes.AUDIO && (
            <>
              <MdMic className="fill-whatsapp-audio-color min-h-5 min-w-5 size-5" />
              <Text
                as="span"
                className="text-neutral-500"
                level="xsmall"
                scheme="label"
              >
                {lastMessage
                  ? shortString(
                      lastMessage,
                      CHAT_CARD_MAXIMUM_LAST_MESSAGE_CHARACTERS,
                    )
                  : 'Audio'}
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
                {lastMessage
                  ? shortString(
                      lastMessage,
                      CHAT_CARD_MAXIMUM_LAST_MESSAGE_CHARACTERS,
                    )
                  : 'Contacto'}
              </Text>
            </>
          )}
          {messageType === MessageTypes.CONVERSATION_EVENT && (
            <>
              <MdOutlineTimelapse className="fill-whatsapp-conversation-event-color min-h-5 min-w-5 size-5" />
              <Text
                as="span"
                className="text-neutral-500"
                level="xsmall"
                scheme="label"
              >
                {lastMessage
                  ? shortString(
                      lastMessage,
                      CHAT_CARD_MAXIMUM_LAST_MESSAGE_CHARACTERS,
                    )
                  : 'Evento'}
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
                {lastMessage
                  ? shortString(
                      lastMessage,
                      CHAT_CARD_MAXIMUM_LAST_MESSAGE_CHARACTERS,
                    )
                  : 'Documento'}
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
                {lastMessage
                  ? shortString(
                      lastMessage,
                      CHAT_CARD_MAXIMUM_LAST_MESSAGE_CHARACTERS,
                    )
                  : 'Imagen'}
              </Text>
            </>
          )}
          {/* TODO: I must to define apart gnetwork brand svg component
              TODO: I must to create a controller for this icon and message
          */}
          {messageType === MessageTypes.INTERNAL && (
            <>
              <svg
                fill="none"
                height="20"
                viewBox="0 0 242 236"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GNetwork Brand</title>
                <path
                  d="M108.036 0H127.914V9.50916L125.321 40.63L111.493 41.4945L95.9357 44.9524L82.1071 51.8681L74.3286 57.0549L66.55 63.9707L58.7714 74.3443L52.7214 86.4469L49.2643 97.685L47.5357 108.059V127.941L50.1286 141.773L55.3143 155.604L63.0929 167.707L71.7357 177.216L82.9714 184.996L95.9357 191.048L110.629 194.505L121.864 195.37L140.014 192.777L150.386 189.319L160.757 184.132L171.129 176.352L178.043 168.571L184.957 156.469L187.55 148.689L150.386 147.824L154.56 137.853L157.513 127.022L159.482 119.145L160.757 110.652H242V124.484L239.407 144.366L235.95 157.333L231.629 168.571L225.579 180.674L215.207 194.505L206.564 204.015L194.464 213.524L183.229 220.44L168.536 227.355L155.571 231.678L140.014 235.136L133.1 236H107.171L91.6143 233.407L74.3286 228.22L59.6357 221.304L49.2643 214.388L40.6214 207.473L31.9786 199.692L23.3357 189.319L15.5571 177.216L8.64286 163.385L4.32143 150.418L0.864286 133.993L0 125.348V109.788L2.59286 91.6337L6.91429 76.0733L12.9643 62.2418L21.6071 48.4103L31.1143 37.1722L39.7571 28.5275L52.7214 19.0183L66.55 11.2381L79.5143 6.05128L95.9357 1.72894L108.036 0Z"
                  fill="#EA0D20"
                />
                <path
                  d="M144.335 2.59302L152.113 3.45749L167.671 8.6443L182.363 15.5601L195.328 24.2047L206.563 33.7139L213.478 40.6296L222.985 53.5967L231.628 70.0216L232.492 74.3439H180.635L178.906 73.4795L181.499 65.6992L191.006 44.952L191.871 42.3586V36.3073L188.413 29.3916L184.092 25.9337L180.635 24.2047H171.992L165.078 27.6626L155.571 38.9007L149.521 46.6809L141.742 44.0875L140.878 43.2231L142.606 16.4245L144.335 2.59302Z"
                  fill="#EA0D20"
                />
                <path
                  d="M174.585 38.9009H177.178L174.585 46.6811L159.893 77.802L146.064 107.194L140.878 118.432L141.743 130.535L139.15 138.315L133.1 145.231L125.321 148.688H114.95L106.307 144.366L101.985 139.179L99.3926 133.992L98.5284 125.348L101.121 117.568L106.307 110.652L114.95 106.329L120.135 104.601L127.914 95.0914L138.285 82.9888L146.064 73.4796L158.164 58.7837L167.671 47.5456L174.585 38.9009Z"
                  fill="black"
                />
              </svg>
              <Text
                as="span"
                className="text-neutral-500"
                level="xsmall"
                scheme="label"
              >
                {lastMessage
                  ? shortString(
                      lastMessage,
                      CHAT_CARD_MAXIMUM_LAST_MESSAGE_CHARACTERS,
                    )
                  : 'Mensaje interno'}
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
                {lastMessage
                  ? shortString(
                      lastMessage,
                      CHAT_CARD_MAXIMUM_LAST_MESSAGE_CHARACTERS,
                    )
                  : 'Localización'}
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
                {lastMessage
                  ? shortString(
                      lastMessage,
                      CHAT_CARD_MAXIMUM_LAST_MESSAGE_CHARACTERS,
                    )
                  : 'Sticker'}
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
                {lastMessage
                  ? shortString(
                      lastMessage,
                      CHAT_CARD_MAXIMUM_LAST_MESSAGE_CHARACTERS,
                    )
                  : 'Video'}
              </Text>
            </>
          )}
        </div>
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
