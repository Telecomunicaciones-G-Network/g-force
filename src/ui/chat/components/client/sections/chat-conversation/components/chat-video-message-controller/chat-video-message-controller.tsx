import type { BubbleStatus } from '@gnetwork-ui/components/molecules/blocks/bubble';
import type { ChatConversationControllerProps } from '../chat-conversation-controller';

import { MdOutlineVideoCameraFront } from 'react-icons/md';

import { BubbleModes } from '@gnetwork-ui/components/molecules/blocks/bubble/enums/bubble-modes.enum';
import { ChatMessageSkeleton } from '@gnetwork-ui/components/organisms/skeletons/chat-message-skeleton';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { MediaStorageStatus } from '@module-chat/domain/enums/media-storage-status.enum';
import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';

import { ChatTextMessage } from '@ui-chat/components/server/messages/chat-text-message';
import { ChatVideoMessage } from '@ui-chat/components/client/messages/chat-video-message';

export const ChatVideoMessageController = ({
  message,
}: Readonly<ChatConversationControllerProps>) => {
  const direction =
    message?.direction === MessageDirections.INCOMING
      ? BubbleModes.INCOMING
      : BubbleModes.OUTGOING;

  const time = isoToTime(message?.createdAt ?? '');

  if (message?.media?.storageStatus === MediaStorageStatus.PENDING) {
    return (
      <ChatMessageSkeleton
        direction={direction}
        time={time}
        username={message?.sender?.name}
      />
    );
  }

  if (
    message?.media?.id &&
    message?.media?.storageStatus === MediaStorageStatus.AVAILABLE
  ) {
    return (
      <ChatVideoMessage
        createdAt={message?.createdAt ?? ''}
        direction={direction}
        filename={message.media.filename}
        isBot={message?.sender?.isBot}
        mediaId={message.media.id}
        mimeType={message.media.mimeType}
        status={message?.status.toLowerCase() as BubbleStatus}
        time={time}
        username={message?.sender?.name ?? ''}
        forwarded={message?.forwarded}
        forwardedManyTimes={message?.forwardedManyTimes}
      />
    );
  }

  return (
    <ChatTextMessage
      caption={null}
      createdAt={message?.createdAt ?? ''}
      direction={direction}
      isBot={message?.sender?.isBot}
      status={message?.status.toLowerCase() as BubbleStatus}
      time={time}
      username={message?.sender?.name ?? ''}
      forwarded={message?.forwarded}
      forwardedManyTimes={message?.forwardedManyTimes}
    >
      <div className="flex items-center gap-2">
        <MdOutlineVideoCameraFront className="min-h-6 min-w-6 size-6" />
        Video no disponible.
      </div>
    </ChatTextMessage>
  );
};
