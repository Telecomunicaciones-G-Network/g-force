import type {
  RequestFastDebitOTPRequest,
  RequestFastDebitOTPResponse,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { BaseException } from '@http-client/exceptions/base.exception';

import { RequestFastDebitOTPException } from '../../domain/exceptions/request-fast-debit-otp.exception';

export const requestFastDebitOTPUsecase = async (
  chatRepository: ChatRepository,
  request: RequestFastDebitOTPRequest,
): Promise<RequestFastDebitOTPResponse> => {
  if (
    !request?.invoiceId ||
    !request?.amount ||
    !request?.bankCode ||
    !request?.phoneNumber ||
    !request?.customerDocument ||
    !request?.customerName
  ) {
    throw new RequestFastDebitOTPException({
      status: 400,
      message: 'Los datos de la solicitud son inválidos',
    });
  }

  return await chatRepository
    .requestFastDebitOTP(request)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new RequestFastDebitOTPException({
        status: error?.status,
      });
    });
};
