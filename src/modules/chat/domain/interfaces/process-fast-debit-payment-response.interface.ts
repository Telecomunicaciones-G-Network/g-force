import type { ApiResponse } from '@module-core/interfaces';

export interface ProcessFastDebitPaymentResponse
  extends Pick<ApiResponse, 'error' | 'status' | 'success'> {
  message: string;
}
