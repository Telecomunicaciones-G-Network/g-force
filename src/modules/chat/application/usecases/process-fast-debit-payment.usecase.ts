import type {
  ProcessFastDebitPaymentRequest,
  ProcessFastDebitPaymentResponse,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { BaseException } from '@http-client/exceptions/base.exception';

import { ProcessFastDebitPaymentException } from '../../domain/exceptions/process-fast-debit-payment.exception';

export const processFastDebitPaymentUsecase = async (
  chatRepository: ChatRepository,
  request: ProcessFastDebitPaymentRequest,
): Promise<ProcessFastDebitPaymentResponse> => {
  if (
    !request?.amount ||
    !request?.bankCode ||
    !request?.customerDocument ||
    !request?.customerName ||
    !request?.invoiceId ||
    !request?.otpCode ||
    !request?.phoneNumber
  ) {
    throw new ProcessFastDebitPaymentException({
      status: 400,
      message: 'Los datos de la solicitud son inválidos',
    });
  }

  return await chatRepository
    .processFastDebitPayment(request)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new ProcessFastDebitPaymentException({
        status: error?.status,
      });
    });
};
