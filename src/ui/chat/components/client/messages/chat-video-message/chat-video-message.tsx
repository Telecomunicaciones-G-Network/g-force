'use client';

import type { ChatVideoMessageProps } from './chat-video-message.props';
import { useQuery } from '@tanstack/react-query';
import { MdDownload, MdPlayArrow, MdVideocam, MdClose } from 'react-icons/md';

import { Modal } from '@gnetwork-ui/components/organisms/modals/modal';
import { useModal } from '@gnetwork-ui/components/organisms/modals/modal/modal.hook';
import { ChatMessage } from '@gnetwork-ui/components/organisms/messages/chat-message';
import { ChatMessageSkeleton } from '@gnetwork-ui/components/organisms/skeletons/chat-message-skeleton';

import { getChatAudioByIdQuery } from '@module-chat/infrastructure/queries/get-chat-audio-by-id.query';
import { queryKeysDictionary } from '@ui-chat/dictionaries/query-keys.dictionary';
import { cn } from '@gnetwork-ui/utils/cn.util';
import { downloadFileByUrl } from '@filer/utils/download-file-by-url.util';

import styles from './chat-video-message.module.css';

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

  const hasCaption =
    typeof rest.caption === 'string' && rest.caption.length > 0;

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
      bubbleClassName={styles.base__bubble}
      direction={direction}
      time={time}
      username={username}
      {...rest}
      caption={null}
    >
      <Modal
        className={cn(styles.base, 'relative sm:max-w-none')}
        hideModalClose
        isOpen={isModalOpen}
        modal={false}
        onOpenChange={onOpenChange}
        modalOverlayChildren={null}
        triggerComponent={
          <button className={styles.base__trigger_button} type="button">
            <video
              className={styles.base__preview_video}
              preload="metadata"
              src={blobUrl}
              muted
            />
            <div className={styles.base__preview_overlay} />
            <div className={styles.base__play_icon_wrapper}>
              <MdPlayArrow className={styles.base__play_icon} />
            </div>
            <div className={styles.base__duration_badge}>
              <MdVideocam size={16} />
              <span>0:38</span>
            </div>
          </button>
        }
      >
        <div className={styles.base__modal_content}>
          <div className={styles.base__top_controls}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                downloadFileByUrl(blobUrl, filename);
              }}
              className={styles.base__control_icon}
              title="Descargar"
            >
              <MdDownload size={24} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenChange(false);
              }}
              className={styles.base__control_icon}
              title="Cerrar"
            >
              <MdClose size={24} />
            </button>
          </div>

          {/** biome-ignore lint/a11y/useMediaCaption: false positive */}
          <video
            className={styles.base__modal_video}
            controls
            autoPlay
            src={blobUrl}
          >
            <source src={blobUrl} type={mimeType} />
          </video>
        </div>
      </Modal>

      {hasCaption && <div className={styles.base__caption}>{rest.caption}</div>}
    </ChatMessage>
  );
};
