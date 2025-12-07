'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export type ImageOrientation = 'landscape' | 'portrait' | 'square';

export const useDetectImageOrientation = (imageSrc?: string) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const [imageOrientation, setImageOrientation] =
    useState<ImageOrientation | null>(null);

  const detectImageOrientation = useCallback((img: HTMLImageElement) => {
    const width = img.naturalWidth;
    const height = img.naturalHeight;

    if (width <= 0 || height <= 0) return;

    if (width === height) {
      setImageOrientation('square');
    } else if (width > height) {
      setImageOrientation('landscape');
    } else {
      setImageOrientation('portrait');
    }
  }, []);

  const handleImageLoad = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      detectImageOrientation(event.currentTarget);
    },
    [detectImageOrientation],
  );

  useEffect(() => {
    if (!imageSrc || !imageRef.current) return;

    const img = imageRef.current;

    if (!(img.complete && img.naturalWidth > 0)) return;

    detectImageOrientation(img);
  }, [imageSrc, detectImageOrientation]);

  return {
    handleImageLoad,
    imageOrientation,
    imageRef,
  };
};
