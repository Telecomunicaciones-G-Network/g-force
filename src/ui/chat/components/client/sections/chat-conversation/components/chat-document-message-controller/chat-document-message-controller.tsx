import type { BubbleStatus } from '@gnetwork-ui/components/molecules/blocks/bubble';
import type { ChatConversationControllerProps } from '../chat-conversation-controller';

import { MdOutlineDescription } from 'react-icons/md';

import { BubbleModes } from '@gnetwork-ui/components/molecules/blocks/bubble/enums/bubble-modes.enum';
import { ChatMessageSkeleton } from '@gnetwork-ui/components/organisms/skeletons/chat-message-skeleton';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { MediaStorageStatus } from '@module-chat/domain/enums/media-storage-status.enum';
import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';

import { ChatTextMessage } from '@ui-chat/components/server/messages/chat-text-message';
import { ChatDocumentMessage } from '@ui-chat/components/client/messages/chat-document-message';

export const ChatDocumentMessageController = ({
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
      <ChatDocumentMessage
        caption={message.text ?? null}
        createdAt={message?.createdAt ?? ''}
        direction={direction}
        filename={message.media.filename}
        forwarded={message.forwarded}
        forwardedManyTimes={message.forwardedManyTimes}
        isBot={message?.sender?.isBot}
        mediaId={message.media.id}
        mimeType={message.media.mimeType}
        replyToMessage={message.replyToMessage}
        status={message?.status.toLowerCase() as BubbleStatus}
        time={time}
        username={message?.sender?.name ?? ''}
      />
    );
  }

  // Fallback: media no disponible o con error
  return (
    <ChatTextMessage
      caption={null}
      createdAt={message?.createdAt ?? ''}
      direction={direction}
      isBot={message?.sender?.isBot}
      status={message?.status.toLowerCase() as BubbleStatus}
      time={time}
      username={message?.sender?.name ?? ''}
    >
      <div className="flex items-center gap-2">
        <MdOutlineDescription className="min-h-6 min-w-6 size-6" />
        Documento no disponible.
      </div>
    </ChatTextMessage>
  );
};
