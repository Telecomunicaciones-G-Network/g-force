import type { InvoiceValues } from '@module-invoice/domain/interfaces';
import type { GetContactInvoicesResponse } from '../../domain/interfaces';
import type { GetContactInvoicesResult } from '../interfaces';
import type { GetContactInvoicesResponseDTO } from '../dtos';

export class GetContactInvoicesMapper {
  static mapFrom(
    input: GetContactInvoicesResponseDTO,
  ): GetContactInvoicesResponse {
    return {
      count: input?.count,
      error: input?.error,
      extra: input?.extra,
      invoices: input?.results?.map(GetContactInvoicesMapper.mapFromArray),
      next: input?.next,
      previous: input?.previous,
      status: input?.status,
      success: input?.success,
    };
  }

  static mapFromArray(input: GetContactInvoicesResult): InvoiceValues {
    return {
      amount: input?.amount,
      dateEmission: input?.date_emission,
      datePayment: input?.date_payment,
      documentNumber: input?.document_number,
      paymentMethods: input?.payment_methods,
      status: input?.status,
    };
  }
}
