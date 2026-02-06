import type { Table } from '@tanstack/react-table';
import type { TableProps } from '@gnetwork-ui/components/organisms/tables/table';

/**
 * @name TableManagerSkeletonProps
 *
 * @description Props for the TableManagerSkeleton component.
 *
 * @extends Pick<TableProps, 'title'>
 *
 * @property {Table<T>} table - The table to render.
 */
export interface TableManagerSkeletonProps<T>
  extends Pick<TableProps, 'title'> {
  table?: Table<T>;
}
