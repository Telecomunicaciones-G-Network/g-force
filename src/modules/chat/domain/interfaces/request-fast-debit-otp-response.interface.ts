import type { ApiBaseResponse } from '@module-core/interfaces';

export interface RequestFastDebitOTPResponse
  extends Pick<ApiBaseResponse, 'error' | 'status' | 'success'> {
  otpExpirationTime: string;
}
