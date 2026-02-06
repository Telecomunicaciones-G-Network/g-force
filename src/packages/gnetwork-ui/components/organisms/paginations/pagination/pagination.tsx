'use client';

import type { PaginationProps } from './pagination.props';

import { cn } from '../../../../utils/cn.util';

import { PaginationBasicButtons } from './components/pagination-basic-buttons';
import { PaginationButtons } from './components/pagination-buttons';
import { PaginationNextButton } from './components/pagination-next-button';
import { PaginationPreviousButton } from './components/pagination-previous-button';

import { usePagination } from './pagination.hook';

import styles from './pagination.module.css';

/**
 * @name Pagination
 *
 * @description Pagination component.
 *
 * @extends {ReactDiv}
 *
 * @property {boolean} canNext - Whether the next page is available.
 * @property {boolean} canPrevious - Whether the previous page is available.
 * @property {string} className - The class name for the Pagination component.
 * @property {() => void} onNext - The function to call when the next page is clicked.
 * @property {(page: number) => void} onPageChange - The function to call when the page is clicked.
 * @property {() => void} onPrevious - The function to call when the previous page is clicked.
 * @property {number} pageIndex - The current page index.
 * @property {number} totalPages - The total number of pages.
 * @property {React.Ref<HTMLDivElement>} ref - The ref for the Pagination component.
 * @property {React.HTMLAttributes<HTMLDivElement>} rest - The rest of the props for the Pagination component.
 */
export const Pagination = ({
  canNext = true,
  canPrevious = true,
  className = '',
  onNext,
  onPageChange,
  onPrevious,
  pageIndex = 0,
  ref,
  totalPages = 0,
  ...rest
}: Readonly<PaginationProps>) => {
  const { paginationPages } = usePagination({ pageIndex, totalPages });

  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col sm:flex-row sm:justify-between sm:items-center',
        className,
      )}
      {...rest}
    >
      <PaginationBasicButtons
        canPrevious={canPrevious}
        canNext={canNext}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <div className="hidden sm:flex">
        <nav
          aria-label="Pagination"
          className={cn(
            styles.base__pagination,
            'bg-chromatic max-h-[32px] rounded-lg isolate -space-x-px',
          )}
        >
          <PaginationPreviousButton
            canPrevious={canPrevious}
            onPrevious={onPrevious}
          />
          <PaginationButtons
            paginationPages={paginationPages}
            pageIndex={pageIndex}
            onPageChange={onPageChange}
          />
          <PaginationNextButton canNext={canNext} onNext={onNext} />
        </nav>
      </div>
    </div>
  );
};
