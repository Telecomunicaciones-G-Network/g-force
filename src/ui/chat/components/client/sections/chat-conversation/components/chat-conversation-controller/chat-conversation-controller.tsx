import type { BubbleStatus } from '@gnetwork-ui/components/molecules/blocks/bubble';
import type { ChatConversationControllerProps } from './chat-conversation-controller.props';

import { ChatTextMessage } from '@gnetwork-ui/components/organisms/blocks/chat-text-message';

import { BubbleModes } from '@gnetwork-ui/components/molecules/blocks/bubble/enums/bubble-modes.enum';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MessageTypes } from '@module-chat/domain/enums/message-types.enum';

import { ChatImageMessage } from '@ui-chat/components/client/blocks/chat-image-message';

export const ChatConversationController = ({
  message,
}: Readonly<ChatConversationControllerProps>) => {
  if (!message || !message?.id) return null;

  switch (message?.type) {
    case MessageTypes.IMAGE:
      return (
        <>
          {message?.media?.id && (
            <ChatImageMessage
              direction={
                message?.direction === MessageDirections.INCOMING
                  ? BubbleModes.INCOMING
                  : BubbleModes.OUTGOING
              }
              imageAlt={message?.media?.filename}
              mediaId={message?.media?.id}
              status={message?.status.toLowerCase() as BubbleStatus}
              time={isoToTime(message?.createdAt ?? '')}
              username={message?.sender?.name}
            />
          )}
        </>
      );
    case MessageTypes.TEXT:
      return (
        <ChatTextMessage
          direction={
            message?.direction === MessageDirections.INCOMING
              ? BubbleModes.INCOMING
              : BubbleModes.OUTGOING
          }
          status={message?.status.toLowerCase() as BubbleStatus}
          time={isoToTime(message?.createdAt ?? '')}
          username={message?.sender?.name}
        >
          {message?.text}
        </ChatTextMessage>
      );
    default:
      return null;
  }
};

/*
{
    "id": "1bbd0ff4-01bc-410b-9841-9aeeea7be597",
    "type": "IMAGE",
    "mimeType": "image/jpeg",
    "filename": "637849269415297"
}
*/
