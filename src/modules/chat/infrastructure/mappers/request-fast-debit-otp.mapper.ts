import type {
  RequestFastDebitOTPRequest,
  RequestFastDebitOTPResponse,
} from '../../domain/interfaces';
import type {
  RequestFastDebitOTPRequestDTO,
  RequestFastDebitOTPResponseDTO,
} from '../dtos';

export class RequestFastDebitOTPMapper {
  static mapFrom(
    input: RequestFastDebitOTPResponseDTO,
  ): RequestFastDebitOTPResponse {
    return {
      error: input?.error,
      message: input?.results?.message ?? '',
      status: input?.status,
      success: input?.success,
    };
  }

  static mapTo(
    output: RequestFastDebitOTPRequest,
  ): RequestFastDebitOTPRequestDTO {
    return {
      amount: output?.amount,
      bank_code: output?.bankCode,
      customer_name: output?.customerName,
      id_number: output?.customerDocument,
      invoice_id: output?.invoiceId,
      phone_number: output?.phoneNumber,
    };
  }
}
