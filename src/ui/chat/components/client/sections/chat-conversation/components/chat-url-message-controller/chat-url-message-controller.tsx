import type { BubbleStatus } from '@gnetwork-ui/components/molecules/blocks/bubble';
import type { ChatConversationControllerProps } from '../chat-conversation-controller';

import { MdOpenInNew, MdOutlineLink } from 'react-icons/md';

import { BubbleModes } from '@gnetwork-ui/components/molecules/blocks/bubble/enums/bubble-modes.enum';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';

import {
  ChatTextMessage,
  ChatTextWithLinks,
} from '@ui-chat/components/server/messages/chat-text-message';
import { ChatReplyPreview } from '@ui-chat/components/client/messages/chat-reply-preview';

export const ChatUrlMessageController = ({
  message,
}: Readonly<ChatConversationControllerProps>) => {
  const direction =
    message?.direction === MessageDirections.INCOMING
      ? BubbleModes.INCOMING
      : BubbleModes.OUTGOING;

  const time = isoToTime(message?.createdAt ?? '');

  const urlButton = message?.interactiveOptions?.urlButton;

  return (
    <ChatTextMessage
      caption={null}
      direction={direction}
      isBot={message?.sender?.isBot}
      status={message?.status.toLowerCase() as BubbleStatus}
      time={time}
      username={message?.sender?.name ?? ''}
      forwarded={message?.forwarded}
      forwardedManyTimes={message?.forwardedManyTimes}
    >
      <div className="flex flex-col gap-1 w-full max-w-full">
        <ChatReplyPreview replyToMessage={message?.replyToMessage} />
        {message?.text ? (
          <span className="whitespace-pre-wrap">
            <ChatTextWithLinks text={message.text} direction={direction} />
          </span>
        ) : (
          <div className="flex items-center gap-2">
            <MdOutlineLink className="min-h-6 min-w-6 size-6" />
            Enlace {urlButton?.url}
          </div>
        )}

        {urlButton?.url && urlButton?.title ? (
          <div className="mt-2 flex justify-center">
            <a
              href={urlButton.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-50 px-4 py-2 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 border border-gray-200 no-underline"
            >
              <MdOpenInNew className="size-4 opacity-70 text-blue-500 " />
              <span>{urlButton.title}</span>
            </a>
          </div>
        ) : null}
      </div>
    </ChatTextMessage>
  );
};
