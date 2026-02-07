import type { BubbleStatus } from '@gnetwork-ui/components/molecules/blocks/bubble';
import type { ChatConversationControllerProps } from '../chat-conversation-controller';

import { MdOutlineQuestionMark } from 'react-icons/md';

import { BubbleModes } from '@gnetwork-ui/components/molecules/blocks/bubble/enums/bubble-modes.enum';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';

import { ChatTextMessage } from '@ui-chat/components/server/messages/chat-text-message';

export const ChatUnknownMessageController = ({
  message,
}: Readonly<ChatConversationControllerProps>) => (
  <ChatTextMessage
    caption={null}
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
    <div className="flex items-center gap-2">
      <MdOutlineQuestionMark className="min-h-6 min-w-6 size-6" />
      Este tipo de mensaje no esta disponible en este momento.
    </div>
  </ChatTextMessage>
);
