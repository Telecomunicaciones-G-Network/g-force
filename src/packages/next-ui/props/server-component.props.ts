import type { PropsWithChildren } from 'react';

/**
 * @interface ServerComponentProps
 *
 * @description This interface represents the props for the server component.
 *
 * @extends {PropsWithChildren}
 *
 * @property {Promise<T>} searchParams - The search params of the server component.
 */
export interface ServerComponentProps<T = Record<string, string>>
  extends PropsWithChildren {
  searchParams?: Promise<T>;
}
