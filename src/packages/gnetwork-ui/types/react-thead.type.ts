import type { ComponentProps, Ref } from 'react';
import type { ReactChild } from './react-child.type';

/**
 * @name ReactThead
 *
 * @description React table header component.
 *
 * @property {string} className - Class name for the table header.
 * @property {ReactChild} children - Children for the table header.
 * @property {Ref<HTMLTableSectionElement>} ref - Ref for the table header.
 */
export type ReactThead = ComponentProps<'thead'> & {
  className?: string;
  children: ReactChild;
  ref?: Ref<HTMLTableSectionElement>;
};
