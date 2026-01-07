import type { ApiResponse } from '@module-core/interfaces';

export type GetAvailableReportPaymentMethodsResponseResultDTO = Record<
  string,
  boolean
>;

export type GetAvailableReportPaymentMethodsResponseDTO =
  ApiResponse<GetAvailableReportPaymentMethodsResponseResultDTO>;
