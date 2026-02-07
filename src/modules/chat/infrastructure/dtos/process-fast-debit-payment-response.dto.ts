import type { ApiResponse } from '@module-core/interfaces';

export interface ProcessFastDebitPaymentResponseResultDTO {
  message: string;
}

export type ProcessFastDebitPaymentResponseDTO =
  ApiResponse<ProcessFastDebitPaymentResponseResultDTO>;
