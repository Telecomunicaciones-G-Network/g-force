import type { ApiResponse } from '@module-core/interfaces';

export interface RequestFastDebitOTPResponse
  extends Pick<ApiResponse, 'error' | 'status' | 'success'> {
  otpExpirationTime: string;
}
