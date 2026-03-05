'use client';

import Image from 'next/image';

import { ResponsiveImage } from '@gnetwork-ui/components/atoms/images/responsive-image';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { useChatFileViewerBody } from './chat-file-viewer-body.hook';

import styles from './chat-file-viewer-body.module.css';

import { ChatSendModes } from '@ui-chat/enums/chat-send-mode.enum';
import { MdOutlineInsertDriveFile } from 'react-icons/md';
import { formatFileSize } from '@filer/utils/format-file-size.util';

export const ChatFileViewerBody = () => {
  const {
    handleImageLoad,
    imageOrientation,
    imageAlt,
    imageRef,
    imageSrc,
    sendMode,
    fileName,
    fileSize,
  } = useChatFileViewerBody();

  return (
    <div className={styles.base}>
      {sendMode === ChatSendModes.DOCUMENT && (
        <div className="flex flex-col items-center justify-center p-8 bg-neutral-100 rounded-xl space-y-4 shadow-sm border border-neutral-200">
          <MdOutlineInsertDriveFile className="size-16 text-neutral-400" />
          <div className="flex flex-col items-center">
            <span
              className="text-sm font-semibold text-chromatic-inverted text-center max-w-[250px] truncate"
              title={fileName}
            >
              {fileName}
            </span>
            {fileSize && (
              <span className="text-xs text-neutral-500">
                {formatFileSize(fileSize)}
              </span>
            )}
          </div>
        </div>
      )}
      {sendMode === ChatSendModes.IMAGE && imageSrc && (
        <div
          className={cn(
            styles.base__container,
            imageOrientation === 'landscape'
              ? 'h-[60%] w-[80%]'
              : 'h-[80%] w-[60%]',
          )}
        >
          <ResponsiveImage
            alt={imageAlt}
            className="rounded-lg"
            customImageComponent={
              <Image
                ref={imageRef}
                alt={imageAlt}
                className={cn(
                  imageOrientation === 'landscape'
                    ? 'object-cover'
                    : 'object-contain',
                  'rounded-lg',
                )}
                fill
                onLoad={handleImageLoad}
                sizes="100%"
                src={imageSrc}
              />
            }
          />
        </div>
      )}
    </div>
  );
};
