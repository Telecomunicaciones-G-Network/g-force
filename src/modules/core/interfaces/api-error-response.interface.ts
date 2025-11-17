import type { ApiResponse } from './api-response.interface';

export interface ApiErrorResponse
  extends Pick<ApiResponse, 'status' | 'success'> {
  error: string;
}
