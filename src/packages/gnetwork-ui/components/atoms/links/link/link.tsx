'use client';

import type { LinkProps } from './link.props';

import { forwardRef } from 'react';

import { cn } from '@gnetwork-ui/utils/cn.util';

import styles from './link.module.css';

/**
 * @name Link
 *
 * @description A styled link component.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, href = '#', ...rest }, ref) => {
    return (
      <a className={cn(styles.link, className)} href={href} ref={ref} {...rest}>
        {children}
      </a>
    );
  },
);

Link.displayName = 'Link';
