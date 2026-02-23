/** biome-ignore-all lint/a11y/useMediaCaption: no caption available for user-uploaded content */
'use client';

import type { ChatDocumentMessageProps } from './chat-document-message.props';

import { useState } from 'react';

import { MdDownload, MdInsertDriveFile } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';

import { ChatMessage } from '@gnetwork-ui/components/organisms/messages/chat-message';
import { ChatMessageSkeleton } from '@gnetwork-ui/components/organisms/skeletons/chat-message-skeleton';

import { getChatAudioByIdQuery } from '@module-chat/infrastructure/queries/get-chat-audio-by-id.query';

import { queryKeysDictionary } from '@ui-chat/dictionaries/query-keys.dictionary';

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
      bubbleClassName="!p-0 overflow-hidden"
      direction={direction}
      time={time}
      username={username}
      {...rest}
    >
      <div className="flex items-center gap-3 p-3 min-w-[200px] max-w-[260px] hover:bg-black/5 transition-colors">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/20">
          <MdInsertDriveFile className="size-6 text-white/80" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-[13px] font-medium leading-tight">
            {filename}
          </span>
          <span className="mt-0.5 text-[11px] opacity-60">
            {getMimeLabel(mimeType)}
          </span>
        </div>

        <button
          type="button"
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/20 transition-colors hover:bg-black/30 disabled:opacity-50"
          aria-label="Descargar documento"
        >
          <MdDownload className="size-5" />
        </button>
      </div>
    </ChatMessage>
  );
};
