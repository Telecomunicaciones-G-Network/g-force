import type { BubbleStatus } from '@gnetwork-ui/components/molecules/blocks/bubble';
import type { ChatConversationControllerProps } from '../chat-conversation-controller';

import {
  MdList,
  MdOutlineQuestionMark,
  MdTouchApp,
  MdOpenInNew,
  MdCheckCircle,
} from 'react-icons/md';

import { BubbleModes } from '@gnetwork-ui/components/molecules/blocks/bubble/enums/bubble-modes.enum';
import { Tooltip } from '@gnetwork-ui/components/molecules/tooltips/tooltip';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MessageTypes } from '@module-chat/domain/enums/message-types.enum';
import { MediaTypes } from '@module-chat/domain/enums/media-types.enum';

import {
  ChatTextMessage,
  ChatTextWithLinks,
} from '@ui-chat/components/server/messages/chat-text-message';
import { ChatReplyPreview } from '@ui-chat/components/client/messages/chat-reply-preview';

import { InteractiveImagePreview } from './components/interactive-image-preview';
import { CollapsibleReplyButtons } from './components/collapsible-reply-buttons';
import { InteractiveListOptions } from './components/collapsible-list-sections';

export const ChatUnknownMessageController = ({
  message,
}: Readonly<ChatConversationControllerProps>) => {
  const getInteractiveInfo = () => {
    switch (message?.type) {
      case MessageTypes.FLOW_COMPLETION:
        return { icon: MdCheckCircle, label: 'Flujo Finalizado' };
      case MessageTypes.FLOW_BUTTON:
        return { icon: MdTouchApp, label: 'Botón de Flujo' };
      case MessageTypes.INTERACTIVE_LIST_OPTIONS:
        return { icon: MdList, label: 'Lista de Opciones' };
      case MessageTypes.INTERACTIVE_BUTTONS:
        return { icon: MdTouchApp, label: 'Botones Interactivos' };
      case MessageTypes.TEMPLATE:
        return { icon: MdTouchApp, label: 'Plantilla' };
      case MessageTypes.INTERACTIVE_BUTTON_REPLY:
        return { icon: MdTouchApp, label: 'Respuesta' };
      case MessageTypes.INTERACTIVE_URL_BUTTON:
        return { icon: MdTouchApp, label: 'Botón de Enlace' };
      default:
        return { icon: MdTouchApp, label: 'Selección Interactiva' };
    }
  };

  const { icon: Icon, label } = getInteractiveInfo();

  const direction =
    message?.direction === MessageDirections.INCOMING
      ? BubbleModes.INCOMING
      : BubbleModes.OUTGOING;

  return (
    <ChatTextMessage
      caption={null}
      createdAt={message?.createdAt ?? ''}
      direction={direction}
      isBot={message?.sender?.isBot}
      status={message?.status.toLowerCase() as BubbleStatus}
      time={isoToTime(message?.createdAt ?? '')}
      username={message?.sender?.name ?? ''}
      forwarded={message?.forwarded}
      forwardedManyTimes={message?.forwardedManyTimes}
    >
      {message?.text ? (
        <div className="flex flex-col gap-1 w-full max-w-full">
          <ChatReplyPreview replyToMessage={message?.replyToMessage} />

          <div className="flex items-center gap-1 opacity-70">
            <Icon size={14} />
            <span className="italic text-xs">{label}</span>
          </div>

          {message?.media?.id && message.media.type === MediaTypes.IMAGE && (
            <InteractiveImagePreview media={message.media} />
          )}

          <span className="whitespace-pre-wrap">
            <ChatTextWithLinks
              text={
                message?.type === MessageTypes.FLOW_COMPLETION &&
                message.text?.toLowerCase() === 'sent'
                  ? 'sent'
                  : (message.text ?? '')
              }
              direction={direction}
            />
          </span>

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

          {message.interactiveOptions?.listSections &&
          message.interactiveOptions.listSections.length > 0 ? (
            <InteractiveListOptions
              sections={message.interactiveOptions.listSections}
              buttonText={
                message.interactiveOptions.listButtonText || 'Opciones'
              }
            />
          ) : message.interactiveOptions?.listButtonText ? (
            <div className="mt-2 flex justify-center">
              <div className="w-full rounded-lg bg-gray-50 px-4 py-2 text-center text-sm font-medium text-gray-700 transition-colors">
                {message.interactiveOptions.listButtonText}
              </div>
            </div>
          ) : null}

          {message.interactiveOptions?.replyButtons &&
          message.interactiveOptions.replyButtons.length > 0 ? (
            <CollapsibleReplyButtons
              buttons={message.interactiveOptions.replyButtons}
            />
          ) : null}

          {message.interactiveOptions?.templateButtons &&
          message.interactiveOptions.templateButtons.length > 0 ? (
            <CollapsibleReplyButtons
              buttons={message.interactiveOptions.templateButtons}
            />
          ) : null}

          {message.interactiveOptions?.urlButton?.url &&
          message.interactiveOptions?.urlButton?.title ? (
            <div className="mt-2 flex justify-center">
              <a
                href={message.interactiveOptions.urlButton.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-50 px-4 py-2 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 border border-gray-200 no-underline"
              >
                <span>{message.interactiveOptions.urlButton.title}</span>
                <MdOpenInNew className="size-4 opacity-70" />
              </a>
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
