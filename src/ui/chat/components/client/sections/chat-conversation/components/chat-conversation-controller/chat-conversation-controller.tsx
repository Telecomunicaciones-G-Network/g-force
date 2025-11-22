import type { ChatConversationControllerProps } from './chat-conversation-controller.props';

import { ChatMessage } from '@gnetwork-ui/components/organisms/blocks/chat-message';

import { BubbleModes } from '@gnetwork-ui/components/molecules/blocks/bubble/enums/bubble-modes.enum';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MessageTypes } from '@module-chat/domain/enums/message-types.enum';

export const ChatConversationController = ({
  message,
}: Readonly<ChatConversationControllerProps>) => {
  if (!message || !message?.id) return null;

  switch (message?.type) {
    case MessageTypes.TEXT:
      return (
        <ChatMessage
          direction={
            message?.direction === MessageDirections.INCOMING
              ? BubbleModes.INCOMING
              : BubbleModes.OUTGOING
          }
          time={isoToTime(message?.createdAt ?? '')}
          username={message?.sender?.name}
        >
          {message?.text}
        </ChatMessage>
      );
    default:
      return null;
  }
};
