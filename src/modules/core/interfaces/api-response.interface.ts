import type { ApiBaseResponse } from './api-base-response.interface';

/**
 * @interface ApiResponse
 *
 * @description This interface represents the response from an API.
 *
 * @extends {ApiBaseResponse<T>}
 *
 * @property {boolean} hasMore - Whether there are more results.
 * @property {string | null} nextCursor - The cursor for the next page.
 */
export interface ApiResponse<T = unknown>
  extends Omit<ApiBaseResponse<T>, 'has_more' | 'next_cursor'> {
  hasMore: boolean;
  nextCursor: string | null;
}
