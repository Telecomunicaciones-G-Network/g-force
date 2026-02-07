import type { EmblaOptionsType } from 'embla-carousel';
import type { ReactDiv } from '../../../../types';
import type { FlatlistItem } from './interfaces';

/**
 * @name FlatlistProps
 *
 * @property {FlatlistItem[]} items - The items to display in the flatlist.
 * @property {EmblaOptionsType} options - The options for the flatlist component.
 */
export interface FlatlistProps extends ReactDiv {
  items: FlatlistItem[];
  options?: EmblaOptionsType;
}
