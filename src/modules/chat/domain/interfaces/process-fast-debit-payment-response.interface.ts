import type { ApiBaseResponse } from '@module-core/interfaces';

export interface ProcessFastDebitPaymentResponse
  extends Pick<ApiBaseResponse, 'error' | 'status' | 'success'> {
  message: string;
}
