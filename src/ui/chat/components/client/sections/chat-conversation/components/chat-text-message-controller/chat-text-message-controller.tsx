import type { BubbleStatus } from '@gnetwork-ui/components/molecules/blocks/bubble';
import type { ChatConversationControllerProps } from '../chat-conversation-controller';

import { BubbleModes } from '@gnetwork-ui/components/molecules/blocks/bubble/enums/bubble-modes.enum';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';

import { ChatTextMessage } from '@ui-chat/components/server/messages/chat-text-message';

export const ChatTextMessageController = ({
  message,
}: Readonly<ChatConversationControllerProps>) => (
  <ChatTextMessage
    direction={
      message?.direction === MessageDirections.INCOMING
        ? BubbleModes.INCOMING
        : BubbleModes.OUTGOING
    }
    isBot={message?.sender?.isBot}
    status={message?.status.toLowerCase() as BubbleStatus}
    time={isoToTime(message?.createdAt ?? '')}
    username={message?.sender?.name ?? ''}
  >
    {message?.text}
  </ChatTextMessage>
);
