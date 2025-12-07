'use client';

import type { ChatImageMessageProps } from './chat-image-message.props';

import Image from 'next/image';

import { useQuery } from '@tanstack/react-query';

import { ChatImageMessage as ChatImageMessageBase } from '@gnetwork-ui/components/organisms/blocks/chat-image-message';
import { ChatMessageSkeleton } from '@gnetwork-ui/components/organisms/skeletons/chat-message-skeleton';

import { getChatMediaByIdQuery } from '@module-chat/infrastructure/queries/get-chat-media-by-id.query';

import { queryKeysDictionary } from '@ui-chat/dictionaries/query-keys.dictionary';

export const ChatImageMessage = ({
  direction,
  imageAlt = '',
  mediaId = '',
  time,
  username,
  ...rest
}: Readonly<ChatImageMessageProps>) => {
  const {
    data: image,
    isLoading,
    error,
  } = useQuery({
    queryKey: [queryKeysDictionary.GET_CHAT_MEDIA_BY_ID, mediaId],
    queryFn: () => getChatMediaByIdQuery(mediaId),
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

  if (error) {
    return (
      <div className="text-red-500 text-sm p-2">Error al cargar la imagen</div>
    );
  }

  return (
    <>
      {image && (
        <ChatImageMessageBase
          direction={direction}
          customImageComponent={
            <Image
              alt={imageAlt}
              className="cursor-pointer responsive-image-cover rounded-sm"
              fill
              src={image}
              sizes="100%"
            />
          }
          imageAlt={imageAlt}
          imageUrl={image}
          time={time}
          username={username}
          {...rest}
        />
      )}
    </>
  );
};
