import type { ReactDiv } from '@gnetwork-ui/types';

/**
 * @name InfinityScrollContainerProps
 *
 * @description Props for the InfinityScrollContainer component.
 *
 * @extends ReactDiv
 *
 * @property {boolean} isLoading - Whether the container is loading.
 * @property {string | null} nextPage - The next page to load.
 * @property {() => void | Promise<void>} onLoadMore - The function to load more data.
 */
export interface InfinityScrollContainerProps extends ReactDiv {
  isLoading?: boolean;
  nextPage?: string | null;
  onLoadMore?: () => void | Promise<void>;
}
