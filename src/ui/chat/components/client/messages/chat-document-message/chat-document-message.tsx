/** biome-ignore-all lint/a11y/useMediaCaption: no caption available for user-uploaded content */
'use client';

import type { ChatDocumentMessageProps } from './chat-document-message.props';

import { useState } from 'react';

import { MdInsertDriveFile } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';

import { ChatMessage } from '@gnetwork-ui/components/organisms/messages/chat-message';
import { ChatMessageSkeleton } from '@gnetwork-ui/components/organisms/skeletons/chat-message-skeleton';

import { getChatAudioByIdQuery } from '@module-chat/infrastructure/queries/get-chat-audio-by-id.query';

import { queryKeysDictionary } from '@ui-chat/dictionaries/query-keys.dictionary';
import { ChatReplyPreview } from '@ui-chat/components/client/messages/chat-reply-preview';

import styles from './chat-document-message.module.css';

/** Maps a MIME type to a human-friendly label shown in the document card. */
const getMimeLabel = (mimeType = ''): string => {
  if (mimeType.includes('pdf')) return 'PDF';
  if (mimeType.includes('word') || mimeType.includes('docx')) return 'Word';
  if (mimeType.includes('excel') || mimeType.includes('xlsx')) return 'Excel';
  if (mimeType.includes('powerpoint') || mimeType.includes('pptx'))
    return 'PowerPoint';
  if (mimeType.includes('zip') || mimeType.includes('rar')) return 'Archivo';
  if (mimeType.includes('text')) return 'Texto';
  return 'Archivo';
};

export const ChatDocumentMessage = ({
  direction,
  filename: _filename,
  mimeType: _mimeType,
  mediaId = '',
  replyToMessage,
  time,
  username,
  ...rest
}: Readonly<ChatDocumentMessageProps>) => {
  const filename = _filename ?? 'documento';
  const mimeType = _mimeType ?? 'application/octet-stream';

  const [isDownloading, setIsDownloading] = useState(false);

  const {
    data: blobUrl,
    isLoading,
    error,
  } = useQuery({
    queryKey: [queryKeysDictionary.GET_CHAT_AUDIO_BY_ID, mediaId],
    queryFn: () => getChatAudioByIdQuery(mediaId),
    enabled: !!mediaId,
  });

  const handleDownload = () => {
    if (!blobUrl) return;
    setIsDownloading(true);
    const anchor = document.createElement('a');
    anchor.href = blobUrl;
    anchor.download = filename;
    anchor.click();
    setIsDownloading(false);
  };

  const hasCaption = typeof rest.caption === 'string' && rest.caption.length > 0;

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
      <div className={styles.base__content}>
        <ChatReplyPreview replyToMessage={replyToMessage} />

        <div className={styles.base__document_card}>
          <div className={styles.base__icon_wrapper}>
            <MdInsertDriveFile className={styles.base__icon} />
          </div>

          <div className={styles.base__info_container}>
            <span className={styles.base__filename}>{filename}</span>
            <span className={styles.base__mime_type}>
              {getMimeLabel(mimeType)}
            </span>
          </div>
        </div>

        {hasCaption && (
          <span className={styles.base__caption}>{rest.caption}</span>
        )}

        <div className={styles.base__divider} />

        <div className={styles.base__actions_container}>
          <a
            href={blobUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.base__open_button}
          >
            Abrir
          </a>
          <button
            type="button"
            onClick={handleDownload}
            disabled={isDownloading}
            className={styles.base__download_button}
          >
            {isDownloading ? 'Descargando...' : 'Descargar'}
          </button>
        </div>
      </div>
    </ChatMessage>
  );
};
