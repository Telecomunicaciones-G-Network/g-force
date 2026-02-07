/**
 * @name ApiGsoftResponse
 *
 * @description This interface represents the response from a GSoft API.
 *
 * @property {number} count - The number of results.
 * @property {string | null} next - The next page cursor.
 * @property {string | null} previous - The previous page cursor.
 * @property {T} results - The results.
 * @property {number} status - The status code.
 * @property {boolean} success - Whether the request was successful.
 */
export interface ApiGsoftResponse<T = unknown> {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: T;
  status: number;
  success: boolean;
}
