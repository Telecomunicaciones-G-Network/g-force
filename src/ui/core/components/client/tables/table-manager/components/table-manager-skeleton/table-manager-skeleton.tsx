import type { Header, HeaderGroup } from '@tanstack/react-table';
import type { TableManagerSkeletonProps } from './table-manager-skeleton.props';

import { flexRender } from '@tanstack/react-table';

import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';
import { TableBody } from '@gnetwork-ui/components/molecules/tables/table-body';
import { TableColumn } from '@gnetwork-ui/components/molecules/tables/table-column';
import { TableHead } from '@gnetwork-ui/components/molecules/tables/table-head';
import { TableHeaderColumn } from '@gnetwork-ui/components/molecules/tables/table-header-column';
import { TableHeaderRow } from '@gnetwork-ui/components/molecules/tables/table-header-row';
import { TableRow } from '@gnetwork-ui/components/molecules/tables/table-row';
import { Table } from '@gnetwork-ui/components/organisms/tables/table';

/**
 * @name TableManagerSkeleton
 *
 * @description Skeleton for the TableManager component.
 *
 * @property {Table<T>} table - The table to render.
 * @property {string} title - The title of the table.
 */
export const TableManagerSkeleton = <T,>({
  table,
  title = '',
}: Readonly<TableManagerSkeletonProps<T>>) => (
  <Table title={title}>
    {table ? (
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
    ) : (
      <TableHead>
        <TableHeaderRow>
          {[...Array(6)].map((_) => (
            <TableHeaderColumn key={crypto.randomUUID()}>
              <Skeleton className="h-6 w-full" />
            </TableHeaderColumn>
          ))}
        </TableHeaderRow>
      </TableHead>
    )}
    <TableBody>
      {[...Array(10)].map((_) => (
        <TableRow key={crypto.randomUUID()}>
          {[...Array(6)].map((_) => (
            <TableColumn key={crypto.randomUUID()}>
              <Skeleton className="h-6 w-full" />
            </TableColumn>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
