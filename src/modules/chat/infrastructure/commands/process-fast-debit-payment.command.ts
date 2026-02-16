import type {
  ProcessFastDebitPaymentRequest,
  ProcessFastDebitPaymentResponse,
} from '../../domain/interfaces';

import { processFastDebitPaymentUsecase } from '../../application/usecases/process-fast-debit-payment.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

export const ProcessFastDebitPaymentCommand = async (
  command: ProcessFastDebitPaymentRequest,
): Promise<ProcessFastDebitPaymentResponse> => {
  return await processFastDebitPaymentUsecase(httpChatRepository, command);
};
