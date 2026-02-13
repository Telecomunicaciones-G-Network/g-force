/**
 * @interface ApiBaseResponse
 *
 * @description This interface represents the response from an API.
 *
 * @property {string | null} cursor - The cursor for the next page.
 * @property {string | null} error - The error message.
 * @property {Record<string, string>} extra - The extra data.
 * @property {boolean} has_more - Whether there are more results.
 * @property {string | null} next_cursor - The cursor for the next page.
 * @property {T} results - The results.
 * @property {number} status - The status code.
 * @property {boolean} success - Whether the request was successful.
 */
export interface ApiBaseResponse<T = unknown> {
  cursor?: string | null;
  error?: string;
  extra?: Record<string, string>;
  has_more?: boolean;
  next_cursor?: string | null;
  results?: T;
  status: number;
  success: boolean;
}
