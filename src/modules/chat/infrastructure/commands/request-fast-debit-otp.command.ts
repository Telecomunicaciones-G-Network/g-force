import type {
  RequestFastDebitOTPRequest,
  RequestFastDebitOTPResponse,
} from '../../domain/interfaces';

import { requestFastDebitOTPUsecase } from '../../application/usecases/request-fast-debit-otp.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

export const RequestFastDebitOTPCommand = async (
  command: RequestFastDebitOTPRequest,
): Promise<RequestFastDebitOTPResponse> => {
  return await requestFastDebitOTPUsecase(httpChatRepository, command);
};
