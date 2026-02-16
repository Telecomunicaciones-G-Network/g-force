import type { PaginationItem } from '../../interfaces/pagination-item.interface';

/**
 * @name PaginationButtonsProps
 *
 * @description Props for the PaginationButtons component.
 *
 * @property {PaginationItem[]} paginationPages - The pagination pages.
 * @property {number} pageIndex - The current page index.
 * @property {VoidFunction} onPageChange - The function to call when the page is changed.
 */
export interface PaginationButtonsProps {
  paginationPages: PaginationItem[];
  pageIndex?: number;
  onPageChange?: (page: number) => void;
}
