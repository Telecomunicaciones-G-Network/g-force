import { PAGINATION_ITEM_TYPES } from '../enums/pagination-item-types.enum';

/**
 * @name PaginationItemPage
 *
 * @description Interface for the pagination item page.
 *
 * @property {PAGINATION_ITEM_TYPES.PAGE} type - The type of the pagination item.
 * @property {number} value - The value of the pagination item.
 */
export interface PaginationItemPage {
  type: PAGINATION_ITEM_TYPES.PAGE;
  value: number;
}

/**
 * @name PaginationItemEllipsis
 *
 * @description Interface for the pagination item ellipsis.
 *
 * @property {string} id - The id of the pagination item.
 * @property {PAGINATION_ITEM_TYPES.ELLIPSIS} type - The type of the pagination item.
 */
export interface PaginationItemEllipsis {
  id: string;
  type: PAGINATION_ITEM_TYPES.ELLIPSIS;
}

/**
 * @name PaginationItem
 *
 * @description Interface for the pagination item.
 *
 * @property {PaginationItemPage | PaginationItemEllipsis} item - The item of the pagination.
 */
export type PaginationItem = PaginationItemPage | PaginationItemEllipsis;
