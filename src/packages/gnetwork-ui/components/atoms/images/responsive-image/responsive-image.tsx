import type { ResponsiveImageProps } from './responsive-image.props';

import Img from 'react-cool-img';

import { cn } from '../../../../utils/cn.util';

import styles from './responsive-image.module.css';

export const ResponsiveImage = ({
  alt = 'Image',
  cache = false,
  className = '',
  customImageComponent,
  lazy = false,
  objectFit,
  ref,
  src,
  ...rest
}: Readonly<ResponsiveImageProps>) => {
  if (!customImageComponent && !src) {
    console.warn(
      'customImageComponent or src prop is missing on ResponsiveImage component. This can not be render appropiately.',
    );
  }
  if (customImageComponent && src) {
    console.warn(
      'customImageComponent and src props are been using at the same time. This can not be render appropiately.',
    );

    return null;
  }

  return (
    <>
      {customImageComponent || src ? (
        <div ref={ref} className={cn(styles.base, className)} {...rest}>
          {customImageComponent ?? customImageComponent}
          {src ? (
            <Img
              alt={alt}
              cache={cache}
              className={styles.base__image}
              lazy={lazy}
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
