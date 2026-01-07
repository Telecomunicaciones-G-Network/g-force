import type { GetAvailableReportPaymentMethodsResponse } from '../../domain/interfaces';
import type { GetAvailableReportPaymentMethodsResponseDTO } from '../dtos';

import { getReportPaymentMethodsDictionary } from '../dictionaries/get-report-payment-methods.dictionary';

export class GetAvailableReportPaymentMethodsMapper {
  static mapFrom(
    input: GetAvailableReportPaymentMethodsResponseDTO,
  ): GetAvailableReportPaymentMethodsResponse {
    return {
      error: input?.error,
      paymentMethods: getReportPaymentMethodsDictionary(input?.results || {}),
      status: input?.status,
      success: input?.success,
    };
  }
}
