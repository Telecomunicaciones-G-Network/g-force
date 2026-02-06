import type { ReactDiv } from '../../../../types';

/**
 * @name PaginationProps
 *
 * @description Props for the Pagination component.
 *
 * @extends ReactDiv
 *
 * @property {boolean} canNext - Whether the next page is available.
 * @property {boolean} canPrevious - Whether the previous page is available.
 * @property {() => void} onNext - The function to call when the next page is clicked.
 * @property {(page: number) => void} onPageChange - The function to call when the page is clicked.
 * @property {() => void} onPrevious - The function to call when the previous page is clicked.
 * @property {number} pageIndex - The current page index.
 * @property {number} totalPages - The total number of pages.
 */
export interface PaginationProps extends ReactDiv {
  canNext?: boolean;
  canPrevious?: boolean;
  onNext?: () => void;
  onPageChange?: (page: number) => void;
  onPrevious?: () => void;
  pageIndex?: number;
  totalPages?: number;
}
