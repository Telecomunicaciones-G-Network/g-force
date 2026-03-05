import type { ChatMessageProps } from '@gnetwork-ui/components/organisms/messages/chat-message';

import { Fragment } from 'react';

import { Link } from '@gnetwork-ui/components/atoms/links/link';
import { BubbleModes } from '@gnetwork-ui/components/molecules/blocks/bubble/enums/bubble-modes.enum';
import { ChatMessage } from '@gnetwork-ui/components/organisms/messages/chat-message';
import { URL_REGEX } from '@regexs/url.regex';

export const ChatTextWithLinks = ({
  text,
  direction,
}: {
  text: string;
  direction?: ChatMessageProps['direction'];
}) => {
  return (
    <>
      {text.split(URL_REGEX).map((part, index) => {
        if (part.match(URL_REGEX)) {
          return (
            <Link
              className={`break-all hover:underline ${
                direction === BubbleModes.INCOMING
                  ? 'text-whatsapp-contact-color'
                  : 'text-tag-blue-foreground'
              }`}
              href={part.startsWith('http') ? part : `https://${part}`}
              // biome-ignore lint/suspicious/noArrayIndexKey: Split string parts have stable order
              key={`${part}-${index}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {part}
            </Link>
          );
        }

        // biome-ignore lint/suspicious/noArrayIndexKey: Split string parts have stable order
        return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
      })}
    </>
  );
};

export const ChatTextMessage = (props: Readonly<ChatMessageProps>) => {
  const { children, ...rest } = props;

  return (
    <ChatMessage {...rest}>
      {typeof children === 'string' ? (
        <ChatTextWithLinks text={children} direction={props.direction} />
      ) : (
        children
      )}
    </ChatMessage>
  );
};
