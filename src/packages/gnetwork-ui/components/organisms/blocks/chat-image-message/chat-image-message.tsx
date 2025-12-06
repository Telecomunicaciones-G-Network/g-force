import type { ChatImageMessageProps } from './chat-image-message.props';

import { ResponsiveImage } from '../../../atoms/images/responsive-image';

import { ChatMessage } from '../chat-message';

export const ChatImageMessage = (props: Readonly<ChatImageMessageProps>) => {
  const {
    customImageComponent,
    imageAlt = 'Image',
    imageUrl = '',
    ...rest
  } = props;

  return (
    <ChatMessage bubbleClassName="w-full" {...rest}>
      <div className="flex h-[154px] w-full">
        <ResponsiveImage
          alt={imageAlt}
          className="h-full w-full"
          customImageComponent={customImageComponent}
          objectFit="cover"
          src={imageUrl}
        />
      </div>
    </ChatMessage>
  );
};
