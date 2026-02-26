import type { BubbleStatus } from '@gnetwork-ui/components/molecules/blocks/bubble';
import type { ChatConversationControllerProps } from '../chat-conversation-controller';

import { BubbleModes } from '@gnetwork-ui/components/molecules/blocks/bubble/enums/bubble-modes.enum';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';

import {
  ChatTextMessage,
  ChatTextWithLinks,
} from '@ui-chat/components/server/messages/chat-text-message';
import { ChatReplyPreview } from '@ui-chat/components/client/messages/chat-reply-preview';

export const ChatTextMessageController = ({
  message,
}: Readonly<ChatConversationControllerProps>) => {
  const direction =
    message?.direction === MessageDirections.INCOMING
      ? BubbleModes.INCOMING
      : BubbleModes.OUTGOING;

  return (
    <ChatTextMessage
      caption={null}
      direction={direction}
      isBot={message?.sender?.isBot}
      status={message?.status.toLowerCase() as BubbleStatus}
      time={isoToTime(message?.createdAt ?? '')}
      username={message?.sender?.name ?? ''}
      forwarded={message?.forwarded}
      forwardedManyTimes={message?.forwardedManyTimes}
    >
      <ChatReplyPreview replyToMessage={message?.replyToMessage} />
      <span className="whitespace-pre-wrap">
        <ChatTextWithLinks text={message?.text ?? ''} direction={direction} />
      </span>
    </ChatTextMessage>
  );
};
