import type { ApiBaseResponse } from '@module-core/interfaces';

export type GetAvailableReportPaymentMethodsResponseResultDTO = Record<
  string,
  boolean
>;

export type GetAvailableReportPaymentMethodsResponseDTO =
  ApiBaseResponse<GetAvailableReportPaymentMethodsResponseResultDTO>;
