import type { ComponentProps, Ref } from 'react';
import type { ReactChild } from './react-child.type';

/**
 * @name ReactTbody
 *
 * @description React table body component.
 *
 * @property {string} className - Class name for the table body.
 * @property {ReactChild} children - Children for the table body.
 * @property {Ref<HTMLTableSectionElement>} ref - Ref for the table body.
 */
export type ReactTbody = ComponentProps<'tbody'> & {
  className?: string;
  children: ReactChild;
  ref?: Ref<HTMLTableSectionElement>;
};
