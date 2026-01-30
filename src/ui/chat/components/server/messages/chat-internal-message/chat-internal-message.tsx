import type { ChatInternalMessageProps } from './chat-internal-message.props';

import { ChatMessage } from '@gnetwork-ui/components/organisms/messages/chat-message';

import { BubbleModes } from '@gnetwork-ui/components/molecules/blocks/bubble/enums/bubble-modes.enum';
import { BubbleStatus } from '@gnetwork-ui/components/molecules/blocks/bubble/enums/bubble-status.enum';
import { TagColors } from '@gnetwork-ui/components/molecules/tags/tag/enums/tag-colors.enum';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';

/**
 * @name ChatInternalMessage
 *
 * @description This component renders a chat internal message.
 *
 * @property {Message} [message] - The message to display.
 */
export const ChatInternalMessage = ({
  message,
}: Readonly<ChatInternalMessageProps>) => (
  <ChatMessage
    bubbleClassName="bg-red-700 text-chromatic"
    customIconClassName="fill-chromatic"
    // TODO: Direction props is weird. We need to check this props
    direction={
      message?.direction === MessageDirections.INCOMING
        ? BubbleModes.INCOMING
        : BubbleModes.OUTGOING
    }
    status={BubbleStatus.READ}
    tagColor={TagColors.RED}
    tagLabel="Interno"
    time={isoToTime(message?.createdAt ?? '')}
    username={message?.sender?.name ?? ''}
  >
    {message?.text}
  </ChatMessage>
);
