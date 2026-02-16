import type { ReactChild } from '../../../../../types';

/**
 * @interface TabLineContent
 *
 * @property {string | number} id - The id of the tab line content
 * @property {ReactChild} children - The children of the tab line content
 * @property {string} value - The value of the tab line content
 */
export interface TabLineContent {
  id: string | number;
  children: ReactChild;
  value: string;
}
