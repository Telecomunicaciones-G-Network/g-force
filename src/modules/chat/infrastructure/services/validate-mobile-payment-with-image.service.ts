import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

interface ValidateMobilePaymentWithImageRequest {
  bank_destination_code: string;
  contract_id: number;
  invoice_id: number;
  image: File;
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

    const response = await gnetworkAxiosApiClient.post<FormData, unknown>(
      CHAT_RESOURCES.VALIDATE_MOBILE_PAYMENT_WITH_IMAGE,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
