'use client';

import Image from 'next/image';

import { ResponsiveImage } from '@gnetwork-ui/components/atoms/images/responsive-image';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { useChatFileViewerBody } from './chat-file-viewer-body.hook';

import styles from './chat-file-viewer-body.module.css';

export const ChatFileViewerBody = () => {
  const { handleImageLoad, imageOrientation, imageAlt, imageRef, imageSrc } =
    useChatFileViewerBody();

  return (
    <div className={styles.base}>
      {imageSrc && (
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
