import type { ComponentProps, Ref } from 'react';
import type { ReactChild } from './react-child.type';

/**
 * @name ReactTd
 *
 * @description React table column component.
 *
 * @property {string} className - Class name for the table column.
 * @property {ReactChild} children - Children for the table column.
 * @property {Ref<HTMLTableDataCellElement>} ref - Ref for the table column.
 *
 * TODO: Change HTMLTableDataCellElement must be change because is deprecated
 */
export type ReactTd = ComponentProps<'td'> & {
  className?: string;
  children: ReactChild;
  ref?: Ref<HTMLTableDataCellElement>;
};
