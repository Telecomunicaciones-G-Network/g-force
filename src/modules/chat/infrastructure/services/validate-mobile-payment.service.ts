import { gnetworkAxiosApiClient } from '@ui-core/fetchers/gnetwork-axios-api-client.fetcher';

import { CHAT_RESOURCES } from '../dictionaries/chat-resources.dictionary';

interface ValidateMobilePaymentRequest {
  amount: number;
  bank_destination_code: string;
  contract_id: number;
  date: string;
  invoice_id: number;
  payment_phone: string;
  reference: string;
}

export const validateMobilePaymentService = async (
  data: Readonly<ValidateMobilePaymentRequest>,
) => {
  try {
    const response = await gnetworkAxiosApiClient.post<unknown>(
      CHAT_RESOURCES.VALIDATE_MOBILE_PAYMENT,
      data,
    );

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
