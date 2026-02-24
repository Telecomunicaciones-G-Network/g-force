import type { BubbleStatus } from '@gnetwork-ui/components/molecules/blocks/bubble';
import type { ChatConversationControllerProps } from '../chat-conversation-controller';
import type { Media } from '@module-chat/domain/interfaces/media.interface';
import type {
  ReplyButton,
  ListSection,
  ListRow,
} from '@module-chat/domain/interfaces/interactive-options.interface';

import { useState } from 'react';
import {
  MdList,
  MdOutlineQuestionMark,
  MdTouchApp,
  MdArrowDownward,
  MdArrowUpward,
  MdOpenInNew,
  MdCheckCircle,
} from 'react-icons/md';

import { BubbleModes } from '@gnetwork-ui/components/molecules/blocks/bubble/enums/bubble-modes.enum';
import { Tooltip } from '@gnetwork-ui/components/molecules/tooltips/tooltip';

import { isoToTime } from '@timer/utils/iso-to-time.util';

import { MessageDirections } from '@module-chat/domain/enums/message-directions.enum';
import { MessageTypes } from '@module-chat/domain/enums/message-types.enum';

import { ChatTextMessage } from '@ui-chat/components/server/messages/chat-text-message';
import { ChatReplyPreview } from '@ui-chat/components/client/messages/chat-reply-preview';

import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { MdDownload } from 'react-icons/md';

import { Modal } from '@gnetwork-ui/components/organisms/modals/modal';
import { useModal } from '@gnetwork-ui/components/organisms/modals/modal/modal.hook';
import { getChatMediaByIdQuery } from '@module-chat/infrastructure/queries/get-chat-media-by-id.query';
import { queryKeysDictionary } from '@ui-chat/dictionaries/query-keys.dictionary';
import { downloadFileByUrl } from '@filer/utils/download-file-by-url.util';
import { extractExtensionFromMimeType } from '@filer/utils/extract-extension-from-mimetype.util';
import { cn } from '@gnetwork-ui/utils/cn.util';

import { MediaTypes } from '@module-chat/domain/enums/media-types.enum';

import { ChatImageMessageModalClose } from '@ui-chat/components/client/messages/chat-image-message/components/chat-image-message-modal-close';
import { ChatImageMessageModal } from '@ui-chat/components/client/messages/chat-image-message/components/chat-image-message-modal';
import styles from '@ui-chat/components/client/messages/chat-image-message/components/chat-image-message-content/chat-image-message-content.module.css';

const InteractiveImagePreview = ({ media }: { media: Media }) => {
  const { isModalOpen, onOpenChange } = useModal();
  const mediaId = media?.id;

  const { data: imageUrl, isLoading } = useQuery({
    queryKey: [queryKeysDictionary.GET_CHAT_MEDIA_BY_ID, mediaId],
    queryFn: () => getChatMediaByIdQuery(mediaId),
    enabled: !!mediaId,
  });

  if (isLoading || !mediaId) {
    return (
      <div className="w-full h-40 bg-black/10 rounded-lg animate-pulse my-2" />
    );
  }

  if (!imageUrl) return null;

  const filename = media?.filename || 'image';
  const mimeType = media?.mimeType || 'image/jpeg';

  return (
    <div className="my-2">
      <Modal
        className={cn(styles.base, 'relative sm:max-w-none')}
        hideModalClose
        isOpen={isModalOpen}
        modal={false}
        onOpenChange={onOpenChange}
        modalOverlayChildren={
          <>
            <ChatImageMessageModalClose />
            <div data-prevent-close>
              <button
                className={cn(styles.base__download_button, 'bg-black')}
                onClick={() =>
                  downloadFileByUrl(
                    imageUrl,
                    filename,
                    extractExtensionFromMimeType(mimeType),
                  )
                }
                type="button"
                aria-label="Descargar imagen interactiva"
              >
                <MdDownload className="fill-white h-6 w-6 size-6" />
              </button>
            </div>
          </>
        }
        triggerComponent={
          <button
            className="relative flex h-40 w-full overflow-hidden rounded-lg bg-black/10 border-none cursor-pointer p-0"
            type="button"
          >
            <Image
              alt={filename}
              className="object-cover"
              fill
              sizes="100%"
              src={imageUrl}
            />
          </button>
        }
      >
        <ChatImageMessageModal imageAlt={filename} imageSrc={imageUrl} />
      </Modal>
    </div>
  );
};

const CollapsibleReplyButtons = ({ buttons }: { buttons: ReplyButton[] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!buttons || buttons.length === 0) return null;

  const hasMore = buttons.length > 2;
  const visibleButtons = isExpanded ? buttons : buttons.slice(0, 2);

  return (
    <div className="mt-2 flex flex-col gap-2 w-full">
      {visibleButtons.map((button) => (
        <div
          key={button.id}
          className="w-full rounded-lg bg-gray-50 px-4 py-2 text-center text-sm font-medium text-gray-700 transition-colors"
        >
          {button.title}
        </div>
      ))}
      {hasMore && (
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mx-auto flex w-fit cursor-pointer items-center justify-center gap-1 rounded-full border border-gray-300 px-3 py-1.5 text-xs font-medium text-black outline-none transition-colors hover:bg-gray-100"
        >
          {isExpanded ? (
            <MdArrowUpward className="size-4" />
          ) : (
            <>
              <MdArrowDownward className="size-4" />
              <span>{buttons.length - 2}</span>
            </>
          )}
        </button>
      )}
    </div>
  );
};

const CollapsibleListSections = ({ sections }: { sections: ListSection[] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!sections || sections.length === 0) return null;

  const totalRows = sections.reduce(
    (acc, section) => acc + (section.rows?.length || 0),
    0,
  );
  const hasMore = totalRows > 2;

  let rowsCounted = 0;

  return (
    <div className="mt-2 flex flex-col gap-2 w-full">
      {sections.map((section, index) => {
        if (!isExpanded && rowsCounted >= 2) return null;

        const availableSlots = isExpanded
          ? section.rows?.length || 0
          : Math.max(0, 2 - rowsCounted);
        const visibleRows = (section.rows || []).slice(0, availableSlots);

        rowsCounted += section.rows?.length || 0;

        if (visibleRows.length === 0) return null;

        return (
          <div
            key={`${section.title ?? 'section'}-${index}`}
            className="flex flex-col gap-1 w-full"
          >
            {section.title && (
              <span className="text-xs font-semibold text-gray-500 uppercase ml-1">
                {section.title}
              </span>
            )}
            {visibleRows.map((row: ListRow) => (
              <div
                key={row.id}
                className="w-full rounded-lg bg-white border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700 transition-colors"
              >
                {row.title}
              </div>
            ))}
          </div>
        );
      })}

      {hasMore && (
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mx-auto flex w-fit cursor-pointer items-center justify-center gap-1 rounded-full border border-gray-300 px-3 py-1.5 text-xs font-medium text-black outline-none transition-colors hover:bg-gray-100"
        >
          {isExpanded ? (
            <MdArrowUpward className="size-4" />
          ) : (
            <>
              <MdArrowDownward className="size-4" />
              <span>{totalRows - 2}</span>
            </>
          )}
        </button>
      )}
    </div>
  );
};

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
            {message?.type === MessageTypes.FLOW_COMPLETION &&
            message.text?.toLowerCase() === 'sent'
              ? 'sent'
              : message.text}
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
            <CollapsibleListSections
              sections={message.interactiveOptions.listSections}
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
