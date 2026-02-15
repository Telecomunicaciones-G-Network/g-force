import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

import type { ApiBaseResponse } from '@module-core/interfaces';
import { BaseException } from '@http-client/exceptions/base.exception';

interface ValidateMobilePaymentWithImageRequest {
  bank_destination_code: string;
  contract_id: number;
  invoice_id: number;
  image: File;
}

interface ValidateMobilePaymentWithImageResponse
  extends Omit<ApiBaseResponse, 'results' | 'extra'> {
  results: {
    message: string;
  };
  extra?: {
    code: number;
    message: string;
  };
}

export const validateMobilePaymentWithImageService = async (
  data: Readonly<ValidateMobilePaymentWithImageRequest>,
) => {
  try {
    const formData = new FormData();
    formData.append('bank_destination_code', data.bank_destination_code);
    formData.append('contract_id', data.contract_id.toString());
    formData.append('invoice_id', data.invoice_id.toString());
    formData.append('image', data.image);

    const response = await gnetworkAxiosApiClient.post<
      FormData,
      ValidateMobilePaymentWithImageResponse
    >(CHAT_RESOURCES.VALIDATE_MOBILE_PAYMENT_WITH_IMAGE, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

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
