import type { ApiResponse } from '@module-core/interfaces';

import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import { BaseException } from '@http-client/exceptions/base.exception';

interface ValidateMobilePaymentRequest {
  amount: number;
  bank_destination_code: string;
  contract_id: number;
  date: string;
  invoice_id: number;
  payment_phone: string;
  reference: string;
}

interface ValidateMobilePaymentResponse
  extends Omit<ApiResponse, 'results' | 'extra'> {
  results: {
    message: string;
  };
  extra?: {
    code: number;
    message: string;
  };
}

export const validateMobilePaymentService = async (
  data: Readonly<ValidateMobilePaymentRequest>,
) => {
  try {
    const response = await gnetworkAxiosApiClient.post<
      ValidateMobilePaymentRequest,
      ValidateMobilePaymentResponse
    >(CHAT_RESOURCES.VALIDATE_MOBILE_PAYMENT, data);

    if (response?.error || !response?.success || !response?.results) {
      throw new BaseException({
        message:
          response?.extra?.message ??
          response?.error ??
          'Error al validar el pago móvil',
        status: response?.status,
      });
    }

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
