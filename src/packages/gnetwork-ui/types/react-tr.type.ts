import type { ComponentProps, Ref } from 'react';
import type { ReactChild } from './react-child.type';

/**
 * @name ReactTr
 *
 * @description React table row component.
 *
 * @property {string} className - Class name for the table row.
 * @property {ReactChild} children - Children for the table row.
 * @property {Ref<HTMLTableRowElement>} ref - Ref for the table row.
 */
export type ReactTr = ComponentProps<'tr'> & {
  className?: string;
  children: ReactChild;
  ref?: Ref<HTMLTableRowElement>;
};
