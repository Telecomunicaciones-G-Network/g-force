import type { ReactDiv } from '../../../../types';

/**
 * @name TableProps
 *
 * @description Props for the Table component.
 *
 * @extends ReactDiv
 *
 * @property {boolean} enableSearch - Whether to enable the search input.
 * @property {boolean} hideHeader - Whether to hide the table header.
 * @property {VoidFunction} onSearch - The function to call when the search is changed.
 * @property {string} searchValue - The current search value (for the search input).
 * @property {string} title - Title for the table.
 */
export interface TableProps extends ReactDiv {
  enableSearch?: boolean;
  hideHeader?: boolean;
  onSearch?: (search?: string) => void;
  searchValue?: string;
  title?: string;
}
