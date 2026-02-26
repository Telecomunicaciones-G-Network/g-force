'use client';

import type { ChatStickerMessageProps } from './chat-sticker-message.props';

import Image from 'next/image';

import { useQuery } from '@tanstack/react-query';

import { ChatMessage } from '@gnetwork-ui/components/organisms/messages/chat-message';
import { ChatMessageSkeleton } from '@gnetwork-ui/components/organisms/skeletons/chat-message-skeleton';

import { getChatMediaByIdQuery } from '@module-chat/infrastructure/queries/get-chat-media-by-id.query';
import { queryKeysDictionary } from '@ui-chat/dictionaries/query-keys.dictionary';

import styles from './chat-sticker-message.module.css';

export const ChatStickerMessage = ({
  caption = null,
  direction,
  imageAlt = 'Sticker',
  mediaId = '',
  time,
  username,
  ...rest
}: Readonly<ChatStickerMessageProps>) => {
  const {
    data: stickerUrl,
    isLoading,
    error,
  } = useQuery({
    queryKey: [queryKeysDictionary.GET_CHAT_MEDIA_BY_ID, mediaId],
    queryFn: () => getChatMediaByIdQuery(mediaId),
    enabled: !!mediaId,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <ChatMessageSkeleton
        direction={direction}
        time={time}
        username={username}
      />
    );
  }

  if (error || !stickerUrl) {
    return (
      <div className="text-red-500 text-sm p-2">Error al cargar el sticker</div>
    );
  }

  return (
    <ChatMessage
      bubbleClassName={styles.base__bubble}
      customIconClassName="hidden"
      direction={direction}
      time={time}
      username={username}
      caption={null}
      {...rest}
    >
      <div className={styles.base__sticker_container}>
        <Image
          alt={imageAlt}
          className={styles.base__sticker_image}
          fill
          sizes="160px"
          src={stickerUrl}
          unoptimized 
        />
      </div>
    </ChatMessage>
  );
};
