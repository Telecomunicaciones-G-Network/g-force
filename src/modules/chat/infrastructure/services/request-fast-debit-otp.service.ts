import type {
  RequestFastDebitOTPRequest,
  RequestFastDebitOTPResponse,
} from '../../domain/interfaces';
import type {
  RequestFastDebitOTPRequestDTO,
  RequestFastDebitOTPResponseDTO,
} from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { RequestFastDebitOTPMapper } from '../mappers/request-fast-debit-otp.mapper';

export const requestFastDebitOTPService = async (
  request: RequestFastDebitOTPRequest,
): Promise<RequestFastDebitOTPResponse> => {
  const requestDTO = RequestFastDebitOTPMapper.mapTo(request);

  const response = await gnetworkAxiosApiClient.post<
    RequestFastDebitOTPRequestDTO,
    RequestFastDebitOTPResponseDTO
  >(CHAT_RESOURCES.REQUEST_FAST_DEBIT_OTP, requestDTO);

  if (response?.error || !response?.success || !response?.results) {
    throw new BaseException({
      message: response?.error ?? 'Error al solicitar el OTP',
      status: response?.status,
    });
  }

  return RequestFastDebitOTPMapper.mapFrom(response);
};
