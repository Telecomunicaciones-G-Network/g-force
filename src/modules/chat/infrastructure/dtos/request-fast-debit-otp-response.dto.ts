import type { ApiResponse } from '@module-core/interfaces';

export interface RequestFastDebitOTPResponseResultDTO {
  message: string;
}

export type RequestFastDebitOTPResponseDTO =
  ApiResponse<RequestFastDebitOTPResponseResultDTO>;
