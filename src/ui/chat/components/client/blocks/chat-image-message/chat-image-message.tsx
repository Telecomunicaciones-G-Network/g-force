'use client';

import type { ChatImageMessageProps } from './chat-image-message.props';

import Image from 'next/image';

import { ChatImageMessage as ChatImageMessageBase } from '@gnetwork-ui/components/organisms/blocks/chat-image-message';

import { useChatImageMessage } from './chat-image-message.hook';

export const ChatImageMessage = ({
  imageAlt = '',
  mediaId = '',
  ...rest
}: Readonly<ChatImageMessageProps>) => {
  const { image, isLoading } = useChatImageMessage({ mediaId });

  return (
    <>
      {isLoading && <div>...loading</div>}
      {!isLoading && image && (
        <ChatImageMessageBase
          customImageComponent={
            <Image
              alt={imageAlt}
              className="cursor-pointer responsive-image-cover rounded-sm"
              fill
              src={image}
              sizes="100%"
            />
          }
          {...rest}
        />
      )}
    </>
  );
};
