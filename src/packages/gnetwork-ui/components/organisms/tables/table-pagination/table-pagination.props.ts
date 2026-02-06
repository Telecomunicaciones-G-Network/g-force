import type { ReactDiv } from '../../../../types';

/**
 * @name TablePaginationProps
 *
 * @description Props for the TablePagination component.
 *
 * @extends ReactDiv
 *
 * @property {boolean} canNext - Whether the next page is available.
 * @property {boolean} canPrevious - Whether the previous page is available.
 * @property {() => void} goToNextPage - The function to call when the next page is clicked.
 * @property {() => void} goToPreviousPage - The function to call when the previous page is clicked.
 * @property {number} limit - The limit of the table.
 * @property {(page: number) => void} onPageChange - The function to call when the page is clicked.
 * @property {number} page - The current page.
 * @property {number} pageIndex - The current page index.
 * @property {number} totalPages - The total number of pages.
 * @property {number} totalRegisters - The total number of registers.
 */
export interface TablePaginationProps extends ReactDiv {
  canNext?: boolean;
  canPrevious?: boolean;
  goToNextPage?: () => void;
  goToPreviousPage?: () => void;
  limit?: number;
  onPageChange?: (page: number) => void;
  page?: number;
  pageIndex?: number;
  totalPages?: number;
  totalRegisters?: number;
}
