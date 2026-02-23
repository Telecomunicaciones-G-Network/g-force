import type { BubbleStatus } from '@gnetwork-ui/components/molecules/blocks/bubble';
import type { ChatConversationControllerProps } from '../chat-conversation-controller';

import { MdOutlineMap } from 'react-icons/md';

import { BubbleModes } from '@gnetwork-ui/components/molecules/blocks/bubble/enums/bubble-modes.enum';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';

import { ChatTextMessage } from '@ui-chat/components/server/messages/chat-text-message';
import { ChatLocationMessage } from '@ui-chat/components/client/messages/chat-location-message';

export const ChatLocationMessageController = ({
  message,
}: Readonly<ChatConversationControllerProps>) => {
  const direction =
    message?.direction === MessageDirections.INCOMING
      ? BubbleModes.INCOMING
      : BubbleModes.OUTGOING;

  const time = isoToTime(message?.createdAt ?? '');

  if (
    message?.location?.latitude !== undefined &&
    message?.location?.longitude !== undefined
  ) {
    return (
      <ChatLocationMessage
        address={message.location.address}
        direction={direction}
        isBot={message?.sender?.isBot}
        latitude={message.location.latitude}
        locationName={message.location.name}
        longitude={message.location.longitude}
        status={message?.status.toLowerCase() as BubbleStatus}
        time={time}
        username={message?.sender?.name ?? ''}
      />
    );
  }

  // Fallback: sin datos de ubicación
  return (
    <ChatTextMessage
      caption={null}
      direction={direction}
      isBot={message?.sender?.isBot}
      status={message?.status.toLowerCase() as BubbleStatus}
      time={time}
      username={message?.sender?.name ?? ''}
    >
      <div className="flex items-center gap-2">
        <MdOutlineMap className="min-h-6 min-w-6 size-6" />
        Ubicación no disponible.
      </div>
    </ChatTextMessage>
  );
};
