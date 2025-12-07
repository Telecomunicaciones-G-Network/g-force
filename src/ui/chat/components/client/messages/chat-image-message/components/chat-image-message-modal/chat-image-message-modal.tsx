'use client';

import type { ChatImageMessageModalProps } from './chat-image-message-modal.props';

import Image from 'next/image';

import { ResponsiveImage } from '@gnetwork-ui/components/atoms/images/responsive-image';

import { useDetectImageOrientation } from '@hook/use-detect-image-orientation.hook';

export const ChatImageMessageModal = ({
  imageAlt = 'Image',
  imageSrc = '',
}: Readonly<ChatImageMessageModalProps>) => {
  const { handleImageLoad, imageOrientation, imageRef } =
    useDetectImageOrientation(imageSrc);

  return (
    <div
      className={
        imageOrientation === 'landscape'
          ? 'h-[60dvh] w-[70dvw]'
          : 'h-[80dvh] w-[30dvw]'
      }
    >
      <ResponsiveImage
        alt={imageAlt}
        className="rounded-lg"
        customImageComponent={
          <Image
            ref={imageRef}
            alt={imageAlt}
            className={
              imageOrientation === 'landscape'
                ? 'object-cover'
                : 'object-contain'
            }
            fill
            onLoad={handleImageLoad}
            sizes="100%"
            src={imageSrc}
          />
        }
      />
    </div>
  );
};
