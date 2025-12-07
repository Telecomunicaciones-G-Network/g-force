'use client';

import type { ResponsiveImageProps } from './responsive-image.props';

import Img from 'react-cool-img';

import { cn } from '../../../../utils/cn.util';

import { useResponsiveImage } from './responsive-image.hook';

import styles from './responsive-image.module.css';

export const ResponsiveImage = ({
  alt = 'Image',
  cache = false,
  className = '',
  customImageComponent,
  imageClassName = '',
  lazy = false,
  objectFit,
  ref,
  src,
  ...rest
}: Readonly<ResponsiveImageProps>) => {
  const { handleImageLoad, imageRef, orientationClassNames } =
    useResponsiveImage(src);

  return (
    <>
      {customImageComponent || src ? (
        <div
          ref={ref}
          className={cn(styles.base, 'h-full w-full', className)}
          {...rest}
        >
          {customImageComponent ?? customImageComponent}
          {src ? (
            <Img
              ref={imageRef}
              alt={alt}
              cache={cache}
              className={cn(
                styles.base__image,
                'h-full w-full',
                orientationClassNames,
                imageClassName,
              )}
              lazy={lazy}
              onLoad={handleImageLoad}
              src={src}
              style={{
                objectFit,
              }}
            />
          ) : null}
        </div>
      ) : null}
    </>
  );
};
