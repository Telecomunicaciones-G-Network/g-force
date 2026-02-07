import type {
  ProcessFastDebitPaymentRequest,
  ProcessFastDebitPaymentResponse,
} from '../../domain/interfaces';
import type {
  ProcessFastDebitPaymentRequestDTO,
  ProcessFastDebitPaymentResponseDTO,
} from '../dtos';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { BaseException } from '@http-client/exceptions/base.exception';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { ProcessFastDebitPaymentMapper } from '../mappers/process-fast-debit-payment.mapper';

export const processFastDebitPaymentService = async (
  request: ProcessFastDebitPaymentRequest,
): Promise<ProcessFastDebitPaymentResponse> => {
  const requestDTO = ProcessFastDebitPaymentMapper.mapTo(request);

  const response = await gnetworkAxiosApiClient.post<
    ProcessFastDebitPaymentRequestDTO,
    ProcessFastDebitPaymentResponseDTO
  >(CHAT_RESOURCES.PROCESS_FAST_DEBIT_PAYMENT, requestDTO);

  if (response?.error || !response?.success || !response?.results) {
    1;
    throw new BaseException({
      message: response?.error ?? 'Error al procesar el debito inmediato',
      status: response?.status,
    });
  }

  return ProcessFastDebitPaymentMapper.mapFrom(response);
};
