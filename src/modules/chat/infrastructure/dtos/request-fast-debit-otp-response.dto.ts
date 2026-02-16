import type { ApiBaseResponse } from '@module-core/interfaces';

export interface RequestFastDebitOTPResponseResultDTO {
  otp_expiration_timestamp: string;
}

export type RequestFastDebitOTPResponseDTO =
  ApiBaseResponse<RequestFastDebitOTPResponseResultDTO>;
