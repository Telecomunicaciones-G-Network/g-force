import type {
  ProcessFastDebitPaymentRequest,
  ProcessFastDebitPaymentResponse,
} from '../../domain/interfaces';
import type {
  ProcessFastDebitPaymentRequestDTO,
  ProcessFastDebitPaymentResponseDTO,
} from '../dtos';

export class ProcessFastDebitPaymentMapper {
  static mapFrom(
    input: ProcessFastDebitPaymentResponseDTO,
  ): ProcessFastDebitPaymentResponse {
    return {
      error: input?.error,
      message: input?.results?.message ?? '',
      status: input?.status,
      success: input?.success,
    };
  }

  static mapTo(
    output: ProcessFastDebitPaymentRequest,
  ): ProcessFastDebitPaymentRequestDTO {
    return {
      amount: output?.amount,
      bank_code: output?.bankCode,
      customer_name: output?.customerName,
      id_number: output?.customerDocument,
      invoice_id: output?.invoiceId,
      otp: output?.otpCode,
      phone_number: output?.phoneNumber,
    };
  }
}
