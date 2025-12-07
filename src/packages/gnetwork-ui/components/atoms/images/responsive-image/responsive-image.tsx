'use client';

import type { ResponsiveImageProps } from './responsive-image.props';

import Img from 'react-cool-img';

import { cn } from '../../../../utils/cn.util';

import styles from './responsive-image.module.css';

export const ResponsiveImage = ({
  alt = 'Image',
  cache = false,
  className = '',
  customImageComponent,
  imageClassName = '',
  imageRef,
  lazy = false,
  objectFit,
  onLoad,
  ref,
  src,
  ...rest
}: Readonly<ResponsiveImageProps>) => {
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
                'aspect-square h-full object-cover w-full',
                imageClassName,
              )}
              lazy={lazy}
              onLoad={onLoad}
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
