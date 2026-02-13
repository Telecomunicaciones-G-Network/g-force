import type { ApiBaseResponse } from '@module-core/interfaces';

export interface ProcessFastDebitPaymentResponseResultDTO {
  message: string;
}

export type ProcessFastDebitPaymentResponseDTO =
  ApiBaseResponse<ProcessFastDebitPaymentResponseResultDTO>;
