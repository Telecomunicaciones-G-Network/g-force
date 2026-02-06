'use client';

import type { PaginationItem } from './interfaces';
import type { PaginationProps } from './pagination.props';

import { PAGINATION_ITEM_TYPES } from './enums/pagination-item-types.enum';

/**
 * @name UsePaginationProps
 *
 * @description Props for the usePagination hook.
 *
 * @property {number} pageIndex - The current page index.
 * @property {number} totalPages - The total number of pages.
 */
type UsePaginationProps = Pick<PaginationProps, 'pageIndex' | 'totalPages'>;

/**
 * @name usePagination
 *
 * @description Hook for the pagination.
 *
 * @property {number} pageIndex - The current page index.
 * @property {number} totalPages - The total number of pages.
 *
 * @returns paginationPages - The pagination pages.
 */
export const usePagination = ({
  pageIndex = 0,
  totalPages = 0,
}: Readonly<UsePaginationProps>) => {
  const getPaginationPages = (): PaginationItem[] => {
    if (totalPages <= 5)
      return Array.from({ length: totalPages }, (_, i) => ({
        type: PAGINATION_ITEM_TYPES.PAGE,
        value: i + 1,
      }));

    const current = pageIndex + 1;
    const pages: PaginationItem[] = [
      { type: PAGINATION_ITEM_TYPES.PAGE, value: 1 },
    ];

    if (current > 3)
      pages?.push({
        type: PAGINATION_ITEM_TYPES.ELLIPSIS,
        id: 'ellipsis-start',
      });

    const start = Math.max(2, current - 1);
    const end = Math.min(totalPages - 1, current + 1);

    for (let i = start; i <= end; i++) {
      if (i !== 1 && i !== totalPages)
        pages?.push({ type: PAGINATION_ITEM_TYPES.PAGE, value: i });
    }

    if (current < totalPages - 2)
      pages?.push({ type: PAGINATION_ITEM_TYPES.ELLIPSIS, id: 'ellipsis-end' });

    if (totalPages > 1)
      pages?.push({ type: PAGINATION_ITEM_TYPES.PAGE, value: totalPages });

    return pages;
  };

  return {
    paginationPages: getPaginationPages() ?? [],
  };
};
