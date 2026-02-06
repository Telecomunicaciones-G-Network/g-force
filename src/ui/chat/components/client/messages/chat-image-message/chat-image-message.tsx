'use client';

import type { ChatImageMessageProps } from './chat-image-message.props';

import Image from 'next/image';

import { useQuery } from '@tanstack/react-query';

import { ChatMessageSkeleton } from '@gnetwork-ui/components/organisms/skeletons/chat-message-skeleton';

import { getChatMediaByIdQuery } from '@module-chat/infrastructure/queries/get-chat-media-by-id.query';

import { queryKeysDictionary } from '@ui-chat/dictionaries/query-keys.dictionary';
import { ChatImageMessageContent } from '../../messages/chat-image-message/components/chat-image-message-content';

export const ChatImageMessage = ({
  caption = null,
  direction,
  filename = '',
  imageAlt = 'Image',
  mediaId = '',
  mimeType = '',
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

  if (error) {
    return (
      <div className="text-red-500 text-sm p-2">Error al cargar la imagen</div>
    );
  }

  return (
    <>
      {image && (
        <ChatImageMessageContent
          caption={caption}
          direction={direction}
          customImageComponent={
            <Image
              alt={imageAlt}
              className="cursor-pointer responsive-image-cover rounded-sm"
              fill
              sizes="100%"
              src={image}
            />
          }
          filename={filename}
          imageAlt={imageAlt}
          imageSrc={image}
          mimeType={mimeType}
          time={time}
          username={username}
          {...rest}
        />
      )}
    </>
  );
};
