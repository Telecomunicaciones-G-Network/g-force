'use client';

import { useDetectImageOrientation } from '@hook/use-detect-image-orientation.hook';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

export const useChatFileViewerBody = () => {
  const file = useChatStore((state) => state.file);
  const sendMode = useChatStore((state) => state.sendMode);

  const { handleImageLoad, imageOrientation, imageRef } =
    useDetectImageOrientation(file?.preview);

  return {
    imageAlt: file?.name ?? 'Image',
    fileName: file?.name ?? 'Documento',
    fileSize: file?.size,
    handleImageLoad,
    imageOrientation,
    imageRef,
    imageSrc: file?.preview,
    sendMode,
  };
};
