'use client';

import type { ChatImageMessageModalProps } from './chat-image-message-modal.props';

import Image from 'next/image';

import { useDetectImageOrientation } from '@hook/use-detect-image-orientation.hook';

import { ResponsiveImage } from '../../../../../atoms/images/responsive-image';

export const ChatImageMessageModal = ({
  alt = 'Image',
  src = '',
}: Readonly<ChatImageMessageModalProps>) => {
  const { handleImageLoad, imageOrientation, imageRef } =
    useDetectImageOrientation(src);

  console.log('imageOrientation', imageOrientation);

  return (
    <div
      className={
        imageOrientation === 'landscape'
          ? 'h-[60dvh] w-[70dvw]'
          : 'h-[80dvh] w-[30dvw]'
      }
    >
      <ResponsiveImage
        alt={alt}
        className="rounded-lg"
        customImageComponent={
          <Image
            fill
            ref={imageRef}
            className={
              imageOrientation === 'landscape'
                ? 'object-cover'
                : 'object-contain'
            }
            sizes="100%"
            src={src}
            alt={alt}
            onLoad={handleImageLoad}
          />
        }
      />
    </div>
  );
};
