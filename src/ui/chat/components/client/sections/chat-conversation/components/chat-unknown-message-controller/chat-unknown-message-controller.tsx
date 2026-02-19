import type { BubbleStatus } from '@gnetwork-ui/components/molecules/blocks/bubble';
import type { ChatConversationControllerProps } from '../chat-conversation-controller';

import { MdList, MdOutlineQuestionMark, MdTouchApp } from 'react-icons/md';

import { BubbleModes } from '@gnetwork-ui/components/molecules/blocks/bubble/enums/bubble-modes.enum';
import { Tooltip } from '@gnetwork-ui/components/molecules/tooltips/tooltip';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MessageTypes } from '@module-chat/domain/enums/message-types.enum';

import { ChatTextMessage } from '@ui-chat/components/server/messages/chat-text-message';

export const ChatUnknownMessageController = ({
  message,
}: Readonly<ChatConversationControllerProps>) => {
  const getInteractiveInfo = () => {
    switch (message?.type) {
      case MessageTypes.FLOW_BUTTON:
        return { icon: MdTouchApp, label: 'Botón de Flujo' };
      case MessageTypes.INTERACTIVE_LIST_OPTIONS:
        return { icon: MdList, label: 'Lista de Opciones' };
      case MessageTypes.INTERACTIVE_BUTTONS:
        return { icon: MdTouchApp, label: 'Botones Interactivos' };
      default:
        return { icon: MdTouchApp, label: 'Selección Interactiva' };
    }
  };

  const { icon: Icon, label } = getInteractiveInfo();

  return (
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
      {message?.text ? (
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 opacity-70">
            <Icon size={14} />
            <span className="italic text-xs">{label}</span>
          </div>
          <span>{message.text}</span>

          {/* Flow Button */}
          {message.interactiveOptions?.buttonText ||
          message.interactiveOptions?.flowData?.buttonText ? (
            <div className="mt-2 flex justify-center">
              <Tooltip
                triggerComponent={
                  <div className="w-full rounded-lg bg-gray-50 px-4 py-2 text-center text-sm font-medium text-gray-700 transition-colors">
                    {message.interactiveOptions?.buttonText ??
                      message.interactiveOptions?.flowData?.buttonText}
                  </div>
                }
              >
                <p className="text-xs">
                  {message.interactiveOptions?.flowData?.flowCodename}
                </p>
              </Tooltip>
            </div>
          ) : null}

          {/* List Options Rows */}
          {message.interactiveOptions?.listSections &&
          message.interactiveOptions.listSections.length > 0 ? (
            <div className="mt-2 flex flex-col gap-2">
              {message.interactiveOptions.listSections.map((section, index) => (
                <div
                  key={`${section.title ?? 'section'}-${index}`}
                  className="flex flex-col gap-1"
                >
                  {section.title && (
                    <span className="text-xs font-semibold text-gray-500 uppercase ml-1">
                      {section.title}
                    </span>
                  )}
                  {section.rows.map((row) => (
                    <div
                      key={row.id}
                      className="w-full rounded-lg bg-white border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700 transition-colors"
                    >
                      {row.title}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : message.interactiveOptions?.listButtonText ? (
            <div className="mt-2 flex justify-center">
              <div className="w-full rounded-lg bg-gray-50 px-4 py-2 text-center text-sm font-medium text-gray-700 transition-colors">
                {message.interactiveOptions.listButtonText}
              </div>
            </div>
          ) : null}

          {/* Reply Buttons */}
          {message.interactiveOptions?.replyButtons &&
          message.interactiveOptions.replyButtons.length > 0 ? (
            <div className="mt-2 flex flex-col gap-2">
              {message.interactiveOptions.replyButtons.map((button) => (
                <div
                  key={button.id}
                  className="w-full rounded-lg bg-gray-50 px-4 py-2 text-center text-sm font-medium text-gray-700 transition-colors"
                >
                  {button.title}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <MdOutlineQuestionMark className="size-6 min-h-6 min-w-6" />
          Este tipo de mensaje no esta disponible en este momento.
        </div>
      )}
    </ChatTextMessage>
  );
};
