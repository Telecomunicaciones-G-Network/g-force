import type { BubbleStatus } from '@gnetwork-ui/components/molecules/blocks/bubble';
import type { ChatConversationControllerProps } from '@ui-chat/components/client/sections/chat-conversation/components/chat-conversation-controller/chat-conversation-controller.props';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { BubbleModes } from '@gnetwork-ui/components/molecules/blocks/bubble/enums/bubble-modes.enum';
import { ChatMessageSkeleton } from '@gnetwork-ui/components/organisms/skeletons/chat-message-skeleton';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MediaStorageStatus } from '@module-chat/domain/enums/media-storage-status.enum';

import { ChatImageMessage } from '@ui-chat/components/client/messages/chat-image-message';

export const ChatImageMessageController = ({
  message,
}: Readonly<ChatConversationControllerProps>) => (
  <>
    {message?.media?.id &&
      message?.media?.storageStatus === MediaStorageStatus.AVAILABLE && (
        <ChatImageMessage
          caption={message?.text}
          direction={
            message?.direction === MessageDirections.INCOMING
              ? BubbleModes.INCOMING
              : BubbleModes.OUTGOING
          }
          filename={message?.media?.filename}
          imageAlt={message?.media?.filename ?? message?.media?.id}
          isBot={message?.sender?.isBot}
          mediaId={message?.media?.id}
          mimeType={message?.media?.mimeType}
          status={message?.status.toLowerCase() as BubbleStatus}
          time={isoToTime(message?.createdAt ?? '')}
          username={message?.sender?.name}
        />
      )}
    {message?.media?.id &&
      message?.media?.storageStatus === MediaStorageStatus.PENDING && (
        <ChatMessageSkeleton
          direction={
            message?.direction === MessageDirections.INCOMING
              ? BubbleModes.INCOMING
              : BubbleModes.OUTGOING
          }
          time={isoToTime(message?.createdAt ?? '')}
          username={message?.sender?.name}
        />
      )}
  </>
);
