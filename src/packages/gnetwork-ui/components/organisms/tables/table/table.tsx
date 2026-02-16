import type { TableProps } from './table.props';

import { cn } from '../../../../utils/cn.util';

import { TableHeader } from '../../../molecules/tables/table-header';

import styles from './table.module.css';

/**
 * @name Table
 *
 * @description Table component.
 *
 * @extends {ReactDiv}
 *
 * @property {string} className - Class name for the table.
 * @property {ReactChild} children - Children for the table.
 * @property {boolean} enableSearch - Whether to enable the search input.
 * @property {boolean} hideHeader - Whether to hide the table header.
 * @property {VoidFunction} onSearch - The function to call when the search is changed.
 * @property {Ref<HTMLDivElement>} ref - Ref for the table.
 * @property {string} searchValue - The current search value.
 * @property {string} title - Title for the table.
 */
export const Table = ({
  className = '',
  children,
  enableSearch = false,
  hideHeader = false,
  onSearch,
  ref,
  searchValue,
  title = '',
  ...rest
}: Readonly<TableProps>) => {
  if (!children)
    console.warn(
      'Prop children is missing on Table component. This component can not be render appropiately.',
    );

  return (
    <div
      ref={ref}
      className={cn(
        styles.base,
        'border border-solid border-neutral-200 rounded-lg shadow-xs',
        className,
      )}
      {...rest}
    >
      {!hideHeader && (
        <TableHeader
          enableSearch={enableSearch}
          onSearch={onSearch}
          searchValue={searchValue}
          title={title}
        />
      )}
      <div className="overflow-x-auto">
        <table
          className={cn('divide-y divide-neutral-200', styles.base__table)}
        >
          {children}
        </table>
      </div>
    </div>
  );
};
