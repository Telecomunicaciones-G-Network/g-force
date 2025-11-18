// PENDING:

import type { AvatarProps } from './avatar.props';

import { ResponsiveImage } from '../../../atoms/images/responsive-image';

import { cn } from '../../../../utils/cn.util';

import { usernameToInitials } from './utils/username-to-initials.util';

import styles from './avatar.module.css';

export const Avatar = ({
  className = '',
  image,
  ref,
  username = '',
  ...rest
}: Readonly<AvatarProps>) => (
  <div
    ref={ref}
    className={cn(
      styles.base,
      'aspect-48/48 border-none flex gap-2 max-w-[48px] p-0 rounded-lg w-full',
      className,
    )}
    {...rest}
  >
    {(image?.src || image?.customImageComponent) && (
      <ResponsiveImage {...image} />
    )}
    {!image?.src && !image?.customImageComponent && username && (
      <div
        className={cn(
          styles.base__username_container,
          'bg-foreground font-semibold rounded-lg text-base text-chromatic',
        )}
      >
        <span className={styles.base__username_container_text}>
          {usernameToInitials(username)}
        </span>
      </div>
    )}
  </div>
);
