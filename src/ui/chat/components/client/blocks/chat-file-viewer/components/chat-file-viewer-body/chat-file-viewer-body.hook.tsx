'use client';

import { useDetectImageOrientation } from '@hook/use-detect-image-orientation.hook';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

export const useChatFileViewerBody = () => {
  const file = useChatStore((state) => state.file);

  const { handleImageLoad, imageOrientation, imageRef } =
    useDetectImageOrientation(file?.preview);

  return {
    imageAlt: file?.name ?? 'Image',
    handleImageLoad,
    imageOrientation,
    imageRef,
    imageSrc: file?.preview,
  };
};
