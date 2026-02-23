/** biome-ignore-all lint/a11y/useMediaCaption: no caption available for user-uploaded content */
'use client';

import type { ChatVideoMessageProps } from './chat-video-message.props';

import { useQuery } from '@tanstack/react-query';

import { MdDownload, MdPlayArrow } from 'react-icons/md';

import { Modal } from '@gnetwork-ui/components/organisms/modals/modal';
import { useModal } from '@gnetwork-ui/components/organisms/modals/modal/modal.hook';
import { ChatMessage } from '@gnetwork-ui/components/organisms/messages/chat-message';
import { ChatMessageSkeleton } from '@gnetwork-ui/components/organisms/skeletons/chat-message-skeleton';

import { getChatAudioByIdQuery } from '@module-chat/infrastructure/queries/get-chat-audio-by-id.query';
import { queryKeysDictionary } from '@ui-chat/dictionaries/query-keys.dictionary';
import { ChatImageMessageModalClose } from '../chat-image-message/components/chat-image-message-modal-close';
import { cn } from '@gnetwork-ui/utils/cn.util';

import { downloadFileByUrl } from '@filer/utils/download-file-by-url.util';
import { extractExtensionFromMimeType } from '@filer/utils/extract-extension-from-mimetype.util';

import styles from '../chat-image-message/components/chat-image-message-content/chat-image-message-content.module.css';

export const ChatVideoMessage = ({
  direction,
  filename: _filename,
  mimeType: _mimeType,
  mediaId = '',
  time,
  username,
  ...rest
}: Readonly<ChatVideoMessageProps>) => {
  const filename = _filename ?? 'video';
  const mimeType = _mimeType ?? 'video/mp4';

  const { isModalOpen, onOpenChange } = useModal();

  const {
    data: blobUrl,
    isLoading,
    error,
  } = useQuery({
    queryKey: [queryKeysDictionary.GET_CHAT_AUDIO_BY_ID, mediaId],
    queryFn: () => getChatAudioByIdQuery(mediaId),
    enabled: !!mediaId,
  });

  if (isLoading) {
    return (
      <ChatMessageSkeleton
        direction={direction}
        time={time}
        username={username}
      />
    );
  }

  if (error || !blobUrl) return null;

  return (
    <ChatMessage
      direction={direction}
      time={time}
      username={username}
      {...rest}
    >
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
                    blobUrl,
                    filename,
                    extractExtensionFromMimeType(mimeType),
                  )
                }
                type="button"
              >
                <MdDownload className="fill-white h-6 w-6 size-6" />
              </button>
            </div>
          </>
        }
        triggerComponent={
          <button
            className="relative flex h-48 w-64 items-center justify-center overflow-hidden rounded-xl bg-black/10 group p-0 border-none cursor-pointer"
            type="button"
          >
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              className="absolute inset-0 h-full w-full object-cover pointer-events-none opacity-90"
              preload="metadata"
              src={blobUrl}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-black/50 backdrop-blur-md group-hover:bg-black/60 transition-colors shadow-lg">
              <MdPlayArrow className="size-8 text-white ml-1" />
            </div>
          </button>
        }
      >
        <div className="flex h-[80dvh] w-[80dvw] items-center justify-center">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            className="max-h-full max-w-full rounded-xl shadow-2xl bg-black"
            controls
            autoPlay
            src={blobUrl}
          >
            <source src={blobUrl} type={mimeType} />
          </video>
        </div>
      </Modal>
    </ChatMessage>
  );
};
