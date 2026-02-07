'use client';

import type { PaginationButtonsProps } from './pagination-buttons.props';

import { PAGINATION_ITEM_TYPES } from '../../enums/pagination-item-types.enum';

import { cn } from '../../../../../../utils/cn.util';

import styles from './pagination-buttons.module.css';

export const PaginationButtons = ({
  paginationPages,
  pageIndex = 0,
  onPageChange,
}: Readonly<PaginationButtonsProps>) => (
  <>
    {paginationPages?.map((item) =>
      item?.type === PAGINATION_ITEM_TYPES.ELLIPSIS ? (
        <span
          key={item?.id}
          className={cn(
            styles.base,
            'font-semibold text-sm px-4 py-2 text-neutral-700 inset-ring inset-ring-neutral-200 focus:outline-offset-0',
          )}
        >
          ...
        </span>
      ) : (
        <button
          key={item?.value}
          aria-current={pageIndex + 1 === item.value ? 'page' : undefined}
          onClick={() => onPageChange?.(item?.value - 1)}
          className={cn(
            styles.base,
            pageIndex + 1 === item?.value
              ? 'bg-red-600 font-medium text-neutral-50 text-xs z-10 px-4 py-2 focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
              : 'font-medium px-4 py-2 text-xs text-neutral-500 inset-ring inset-ring-gray-300 hover:bg-neutral-50 focus:z-20 focus:outline-offset-0',
          )}
          type="button"
        >
          {item?.value}
        </button>
      ),
    )}
  </>
);
