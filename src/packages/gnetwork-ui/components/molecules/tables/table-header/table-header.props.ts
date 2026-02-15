import type { TableProps } from '../../../organisms/tables/table/table.props';

/**
 * @name TableHeaderProps
 *
 * @description Props for the TableHeader component.
 *
 * @extends Pick<TableProps, 'enableSearch' | 'title'>
 *
 * @property {boolean} enableSearch - Whether to enable the search input.
 * @property {VoidFunction} onSearch - The function to call when the search is changed.
 * @property {string} searchValue - The current search value.
 * @property {string} title - Title for the table header.
 */
export type TableHeaderProps = Pick<
  TableProps,
  'enableSearch' | 'onSearch' | 'searchValue' | 'title'
>;
