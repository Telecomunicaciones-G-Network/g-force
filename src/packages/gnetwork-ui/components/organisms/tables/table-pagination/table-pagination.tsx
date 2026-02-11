'use client';

import type { TablePaginationProps } from './table-pagination.props';

import { Text } from '../../../atoms/texts/text';
import { Pagination } from '../../paginations/pagination';

import { cn } from '../../../../utils/cn.util';

import styles from './table-pagination.module.css';

/**
 * @name TablePagination
 *
 * @description Table pagination component.
 *
 * @extends {ReactDiv}
 *
 * @property {boolean} canNext - Whether the next page is available.
 * @property {boolean} canPrevious - Whether the previous page is available.
 * @property {string} className - The class name for the TablePagination component.
 * @property {VoidFunction} goToNextPage - The function to call when the next page is clicked.
 * @property {VoidFunction} goToPreviousPage - The function to call when the previous page is clicked.
 * @property {number} limit - The limit of the table.
 * @property {(page: number) => void} onPageChange - The function to call when the page is clicked.
 * @property {number} page - The current page.
 * @property {number} pageIndex - The current page index.
 * @property {number} totalPages - The total number of pages.
 * @property {number} totalRegisters - The total number of registers.
 * @property {React.Ref<HTMLDivElement>} ref - The ref for the TablePagination component.
 * @property {React.HTMLAttributes<HTMLDivElement>} rest - The rest of the props for the TablePagination component.
 */
export const TablePagination = ({
  canNext = true,
  canPrevious = true,
  className = '',
  goToNextPage,
  goToPreviousPage,
  limit = 10,
  onPageChange,
  page = 1,
  pageIndex = 0,
  ref,
  totalPages = 0,
  totalRegisters = 0,
  ...rest
}: Readonly<TablePaginationProps>) => (
  <div
    ref={ref}
    className={cn(
      styles.base,
      'bg-chromatic border-x border-b border-solid border-b-neutral-200 border-x-neutral-200 flex gap-2 justify-between min-h-[56px] pl-4 pr-2 py-2 rounded-b-lg',
    )}
    {...rest}
  >
    <Text
      as="label"
      align="left"
      className="text-neutral-500"
      level="small"
      scheme="paragraph"
    >
      {limit && page
        ? `Mostrando ${(page - 1) * limit + 1} - ${Math.min(page * limit, totalRegisters || page * limit)}`
        : ''}
      {totalRegisters ? ` de ${totalRegisters} registros` : ''}
    </Text>
    <Pagination
      canNext={canNext}
      canPrevious={canPrevious}
      onNext={goToNextPage}
      onPageChange={onPageChange}
      onPrevious={goToPreviousPage}
      pageIndex={pageIndex}
      totalPages={totalPages}
    />
  </div>
);
