import type { ReactDiv } from '@gnetwork-ui/types';

/**
 * @name InfinityScrollContainerProps
 *
 * @description Props for the InfinityScrollContainer component.
 *
 * @extends ReactDiv
 *
 * @property {'top' | 'bottom'} direction - Direction of the infinite scroll. 'bottom' loads more when scrolling down (default), 'top' loads more when scrolling up (for chats).
 * @property {boolean} isLoading - Whether the container is loading.
 * @property {string | null} nextPage - The next page to load.
 * @property {() => void | Promise<void>} onLoadMore - The function to load more data.
 */
export interface InfinityScrollContainerProps extends ReactDiv {
  direction?: 'top' | 'bottom';
  isLoading?: boolean;
  nextPage?: string | null;
  onLoadMore?: () => void | Promise<void>;
}
