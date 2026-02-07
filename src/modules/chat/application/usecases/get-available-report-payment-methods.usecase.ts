import type { GetAvailableReportPaymentMethodsResponse } from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { BaseException } from '@http-client/exceptions/base.exception';

import { GetAvailableReportPaymentMethodsException } from '../../domain/exceptions/get-available-report-payment-methods.exception';

export const getAvailableReportPaymentMethodsUsecase = async (
  httpChatRepository: ChatRepository,
): Promise<GetAvailableReportPaymentMethodsResponse> => {
  return httpChatRepository
    .getAvailableReportPaymentMethods()
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new GetAvailableReportPaymentMethodsException({
        status: error?.status,
      });
    });
};
