import type { TableHeaderProps } from './table-header.props';

import { Text } from '../../../atoms/texts/text';
import { SearchInput } from '../../inputs/search-input';

import { cn } from '../../../../utils/cn.util';

import styles from './table-header.module.css';

/**
 * @name TableHeader
 *
 * @description Table header component.
 *
 * @extends {ReactDiv}
 *
 * @property {boolean} enableSearch - Whether to enable the search input.
 * @property {VoidFunction} onSearch - The function to call when the search is changed.
 * @property {string} searchValue - The current search value.
 * @property {string} title - Title for the table header.
 */
export const TableHeader = ({
  enableSearch = false,
  onSearch,
  searchValue,
  title = '',
}: Readonly<TableHeaderProps>) => (
  <div
    className={cn(
      styles.base,
      'border-b border-solid border-b-neutral-200 bg-chromatic gap-2 px-4 py-2 rounded-t-lg sm:flex sm:items-center',
    )}
  >
    {title && (
      <Text
        as="h3"
        align="left"
        className="text-neutral-400"
        level="medium"
        scheme="label"
      >
        {title}
      </Text>
    )}
    <div className={styles.base__actions}>
      {enableSearch && (
        <SearchInput
          className="max-w-[178px] min-h-8"
          placeholder="Buscar..."
          onChange={(e) => onSearch?.(e.target.value)}
          value={searchValue ?? ''}
        />
      )}
    </div>
  </div>
);
