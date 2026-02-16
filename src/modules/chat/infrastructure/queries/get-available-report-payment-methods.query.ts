import type { GetAvailableReportPaymentMethodsResponse } from '../../domain/interfaces';

import { getAvailableReportPaymentMethodsUsecase } from '../../application/usecases/get-available-report-payment-methods.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

export const getAvailableReportPaymentMethodsQuery =
  async (): Promise<GetAvailableReportPaymentMethodsResponse> => {
    return await getAvailableReportPaymentMethodsUsecase(httpChatRepository);
  };
