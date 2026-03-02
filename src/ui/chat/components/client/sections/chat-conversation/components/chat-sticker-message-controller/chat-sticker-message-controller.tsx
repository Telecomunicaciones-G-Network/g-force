import type { BubbleStatus } from '@gnetwork-ui/components/molecules/blocks/bubble';
import type { ChatConversationControllerProps } from '../chat-conversation-controller';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { BubbleModes } from '@gnetwork-ui/components/molecules/blocks/bubble/enums/bubble-modes.enum';
import { ChatMessageSkeleton } from '@gnetwork-ui/components/organisms/skeletons/chat-message-skeleton';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MediaStorageStatus } from '@module-chat/domain/enums/media-storage-status.enum';

import { ChatStickerMessage } from '@ui-chat/components/client/messages/chat-sticker-message';

export const ChatStickerMessageController = ({
  message,
}: Readonly<ChatConversationControllerProps>) => (
  <>
    {message?.media?.id &&
      message?.media?.storageStatus === MediaStorageStatus.AVAILABLE && (
        <ChatStickerMessage
          caption={null}
          createdAt={message?.createdAt ?? ''}
          direction={
            message?.direction === MessageDirections.INCOMING
              ? BubbleModes.INCOMING
              : BubbleModes.OUTGOING
          }
          imageAlt={message?.media?.filename ?? message?.media?.id}
          isBot={message?.sender?.isBot}
          mediaId={message?.media?.id}
          status={message?.status.toLowerCase() as BubbleStatus}
          time={isoToTime(message?.createdAt ?? '')}
          username={message?.sender?.name}
          forwarded={message?.forwarded}
          forwardedManyTimes={message?.forwardedManyTimes}
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
