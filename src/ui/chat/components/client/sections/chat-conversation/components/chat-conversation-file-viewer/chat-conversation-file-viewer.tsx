'use client';

import Image from 'next/image';

import { MdDelete, MdDownload } from 'react-icons/md';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { useChatConversationFileViewer } from './chat-conversation-file-viewer.hook';

import styles from './chat-conversation-file-viewer.module.css';

export const ChatConversationFileViewer = () => {
  const { downloadFile, file, removeFile } = useChatConversationFileViewer();

  return (
    <>
      {file && (
        <div
          className={cn(
            styles.base,
            'bg-chromatic border border-solid border-neutral-200 divide-y divide-neutral-200 min-w-[280px] rounded-lg',
            `${file?.preview ? 'top-[-210px]' : 'top-[-36px]'}`,
          )}
        >
          <div className={cn(styles.base__image, 'h-[160px]')}>
            <Image
              alt={file?.name || 'File'}
              className="responsive-image-cover rounded-t-lg"
              fill
              sizes="100%"
              src={file?.preview || ''}
            />
          </div>
          <div className={cn(styles.base__actions, 'h-10 py-4 px-2')}>
            <button
              className="cursor-pointer"
              onClick={removeFile}
              type="button"
            >
              <MdDelete className="fill-red-700 min-h-6 min-w-6 size-6" />
            </button>
            <button
              className="cursor-pointer"
              onClick={downloadFile}
              type="button"
            >
              <MdDownload className="fill-neutral-500 min-h-6 min-w-6 size-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
