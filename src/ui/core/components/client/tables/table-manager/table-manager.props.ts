import type { Dispatch, SetStateAction } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import type { TableProps } from '@gnetwork-ui/components/organisms/tables/table';

/**
 * @name TableManagerProps
 *
 * @description Props for the TableManager component.
 *
 * @extends TableProps
 *
 * @property {ColumnDef<T>[]} builder - The builder for the table.
 * @property {T[]} data - The data for the table.
 * @property {boolean} enableSearch - Whether to enable the search input.
 * @property {() => void} goToNextPage - The function to call when the next page is clicked.
 * @property {() => void} goToPage - The function to call when the page is clicked.
 * @property {() => void} goToPreviousPage - The function to call when the previous page is clicked.
 * @property {boolean} isError - Whether the table has an error.
 * @property {boolean} isLoading - Whether the table is loading.
 * @property {number} limit - The limit of the table.
 * @property {() => void} onSearch - The function to call when the search is changed.
 * @property {number} page - The current page.
 * @property {number} pageIndex - The current page index.
 * @property {string} searchValue - The current search value.
 * @property {Dispatch<SetStateAction<number>>} setPageIndex - The function to call when the page index is changed.
 * @property {number} totalRegisters - The total number of registers.
 */
export interface TableManagerProps<T> extends TableProps {
  builder: ColumnDef<T>[];
  data: T[];
  enableSearch?: boolean;
  goToNextPage?: () => void;
  goToPage?: (page: number) => void;
  goToPreviousPage?: () => void;
  isError?: boolean;
  isLoading?: boolean;
  limit?: number;
  onSearch?: (search?: string) => void;
  page?: number;
  pageIndex?: number;
  searchValue?: string;
  setPageIndex?: Dispatch<SetStateAction<number>>;
  totalRegisters?: number;
}
