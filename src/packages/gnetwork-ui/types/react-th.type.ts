import type { ComponentProps, Ref } from 'react';
import type { ReactChild } from './react-child.type';

/**
 * @name ReactTh
 *
 * @description React table header column component.
 *
 * @property {string} className - Class name for the table header column.
 * @property {ReactChild} children - Children for the table header column.
 * @property {Ref<HTMLTableHeaderCellElement>} ref - Ref for the table header column.
 *
 * TODO: Change HTMLTableHeaderCellElement must be change because is deprecated
 */
export type ReactTh = ComponentProps<'th'> & {
  className?: string;
  children: ReactChild;
  ref?: Ref<HTMLTableHeaderCellElement>;
};
