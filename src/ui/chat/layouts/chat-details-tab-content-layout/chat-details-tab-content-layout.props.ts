import type { PropsWithChildren } from 'react';
import type { ReactChild } from '@gnetwork-ui/types';

/**
 * @name ChatDetailsTabContentLayoutProps
 *
 * @description Props for the ChatDetailsTabContentLayout component.
 *
 * @property {ReactChild} [actionComponent] - An optional action component to render (e.g., a button).
 * @property {string} [title] - An optional title to display in the layout header.
 */
export interface ChatDetailsTabContentLayoutProps extends PropsWithChildren {
  actionComponent?: ReactChild;
  title?: string;
}
