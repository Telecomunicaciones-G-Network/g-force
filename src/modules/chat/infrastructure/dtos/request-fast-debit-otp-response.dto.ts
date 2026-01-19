import type { ApiResponse } from '@module-core/interfaces';

export interface RequestFastDebitOTPResponseResultDTO {
  otp_expiration_timestamp: string;
}

export type RequestFastDebitOTPResponseDTO =
  ApiResponse<RequestFastDebitOTPResponseResultDTO>;
