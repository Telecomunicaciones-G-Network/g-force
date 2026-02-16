'use client';

import type { Cell, Header, HeaderGroup, Row } from '@tanstack/react-table';
import type { TableManagerProps } from './table-manager.props';

import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from '@tanstack/react-table';

import { TableBody } from '@gnetwork-ui/components/molecules/tables/table-body';
import { TableColumn } from '@gnetwork-ui/components/molecules/tables/table-column';
import { TableHead } from '@gnetwork-ui/components/molecules/tables/table-head';
import { TableHeaderColumn } from '@gnetwork-ui/components/molecules/tables/table-header-column';
import { TableHeaderRow } from '@gnetwork-ui/components/molecules/tables/table-header-row';
import { TableRow } from '@gnetwork-ui/components/molecules/tables/table-row';
import { TablePagination } from '@gnetwork-ui/components/organisms/tables/table-pagination';
import { Table } from '@gnetwork-ui/components/organisms/tables/table';

import { TABLE_RECORD_LIMIT_PER_PAGE } from '@ui-core/constants/table-record-limit-per-page.constant';

import { TableManagerEmpty } from './components/table-manager-empty';
import { TableManagerError } from './components/table-manager-error';
import { TableManagerSkeleton } from './components/table-manager-skeleton';

/**
 * @name TableManager
 *
 * @description Table manager component.
 *
 * @extends {ReactDiv}
 *
 * @property {React.Ref<HTMLDivElement>} ref - The ref for the TableManager component.
 * @property {ColumnDef<T>[]} builder - The builder for the table.
 * @property {string} className - The class name for the TableManager component.
 * @property {T[]} data - The data for the table.
 * @property {boolean} enableSearch - Whether to enable the search input.
 * @property {VoidFunction} goToNextPage - The function to call when the next page is clicked.
 * @property {VoidFunction} goToPage - The function to call when the page is clicked.
 * @property {VoidFunction} goToPreviousPage - The function to call when the previous page is clicked.
 * @property {boolean} isError - Whether the table has an error.
 * @property {boolean} isLoading - Whether the table is loading.
 * @property {number} limit - The limit of the table.
 * @property {VoidFunction} onSearch - The function to call when the search is changed.
 * @property {number} page - The current page.
 * @property {number} pageIndex - The current page index.
 * @property {string} searchValue - The current search value.
 * @property {Dispatch<SetStateAction<number>>} setPageIndex - The function to call when the page index is changed.
 * @property {string} title - The title for the table.
 * @property {number} totalRegisters - The total number of registers.
 * @property {React.HTMLAttributes<HTMLDivElement>} rest - The rest of the props for the TableManager component.
 *
 * TODO: When change of page, pagination should be static.
 */
export const TableManager = <T,>({
  ref,
  builder,
  className = '',
  data = [],
  enableSearch = false,
  goToNextPage,
  goToPage,
  goToPreviousPage,
  isError = false,
  isLoading = false,
  limit = TABLE_RECORD_LIMIT_PER_PAGE,
  searchValue,
  page = 1,
  pageIndex = 0,
  onSearch,
  setPageIndex,
  title = '',
  totalRegisters = 0,
  ...rest
}: Readonly<TableManagerProps<T>>) => {
  const totalPages = Math.max(1, Math.ceil((totalRegisters || 0) / limit));
  const canPrevious = pageIndex > 0;
  const canNext = pageIndex < totalPages - 1;

  const table = useReactTable<T>({
    columns: builder,
    data: data ?? [],
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination: {
        pageIndex,
        pageSize: limit,
      },
    },
    manualPagination: true,
    pageCount: -1,
    onPaginationChange: (updater) => {
      setPageIndex?.((prev) => {
        const next =
          typeof updater === 'function'
            ? updater({
                pageIndex: prev,
                pageSize: limit,
              })
            : updater;
        return next.pageIndex;
      });
    },
  });

  if (!builder)
    console.warn(
      'Prop builder is missing on TableManager component. This component can not be render appropiately.',
    );

  if (!data || !Array.isArray(data))
    console.warn(
      'Prop data is missing or is zero on TableManager component. This component can not be render appropiately.',
    );

  return (
    <div className="flex flex-col min-h-[530px]">
      {isLoading && <TableManagerSkeleton<T> table={table} title={title} />}
      {isError && !isLoading && <TableManagerError />}
      {!isError && !isLoading && (
        <>
          <Table
            ref={ref}
            className={className}
            enableSearch={enableSearch}
            onSearch={onSearch}
            searchValue={searchValue}
            title={title}
            {...rest}
          >
            <TableHead>
              {table?.getHeaderGroups()?.map((headerGroup: HeaderGroup<T>) => (
                <TableHeaderRow key={headerGroup?.id}>
                  {headerGroup?.headers?.map((header: Header<T, unknown>) => (
                    <TableHeaderColumn key={header?.id}>
                      {flexRender(
                        header?.column?.columnDef?.header,
                        header?.getContext(),
                      )}
                    </TableHeaderColumn>
                  ))}
                </TableHeaderRow>
              ))}
            </TableHead>
            <TableBody>
              {table?.getRowModel()?.rows?.map((row: Row<T>) => (
                <TableRow key={row?.id}>
                  {row?.getVisibleCells()?.map((cell: Cell<T, unknown>) => (
                    <TableColumn key={cell?.id}>
                      {flexRender(
                        cell?.column?.columnDef?.cell,
                        cell?.getContext(),
                      )}
                    </TableColumn>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {data?.length > 0 && totalRegisters > 0 && (
            <TablePagination
              canNext={canNext}
              canPrevious={canPrevious}
              goToNextPage={goToNextPage}
              goToPreviousPage={goToPreviousPage}
              limit={limit}
              onPageChange={(page) => goToPage?.(page + 1)}
              page={page}
              pageIndex={pageIndex}
              totalPages={totalPages}
              totalRegisters={totalRegisters}
            />
          )}
          {(data?.length === 0 || totalRegisters === 0) && (
            <TableManagerEmpty />
          )}
        </>
      )}
    </div>
  );
};
