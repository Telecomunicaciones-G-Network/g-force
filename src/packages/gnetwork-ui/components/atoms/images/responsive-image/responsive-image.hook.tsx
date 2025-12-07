'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export const useResponsiveImage = (src?: string) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const [isLandscape, setIsLandscape] = useState<boolean | null>(null);

  const detectImageOrientation = useCallback((img: HTMLImageElement) => {
    const width = img.naturalWidth;
    const height = img.naturalHeight;

    if (width > 0 && height > 0) {
      setIsLandscape(width > height);
    }
  }, []);

  const getObjectFitClasses = () => {
    if (isLandscape === null) {
      return 'object-cover';
    }

    return isLandscape ? 'object-cover' : 'object-contain';
  };

  const handleImageLoad = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      detectImageOrientation(event.currentTarget);
    },
    [detectImageOrientation],
  );

  useEffect(() => {
    if (src && imageRef.current) {
      const img = imageRef.current;
      if (img.complete && img.naturalWidth > 0) {
        detectImageOrientation(img);
      }
    }
  }, [src, detectImageOrientation]);

  return {
    handleImageLoad,
    imageRef,
    orientationClassNames: getObjectFitClasses(),
  };
};
