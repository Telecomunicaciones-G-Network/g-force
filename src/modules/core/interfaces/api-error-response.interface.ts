import type { ApiBaseResponse } from './api-base-response.interface';

export interface ApiErrorResponse
  extends Pick<ApiBaseResponse, 'status' | 'success'> {
  error: string;
}
