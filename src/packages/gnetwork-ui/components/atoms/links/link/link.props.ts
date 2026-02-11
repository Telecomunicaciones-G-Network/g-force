import type { AnchorHTMLAttributes, ReactNode } from 'react';

/**
 * @name LinkProps
 *
 * @description The props for the Link component.
 */
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * @description The content of the link.
   */
  children: ReactNode;
}
