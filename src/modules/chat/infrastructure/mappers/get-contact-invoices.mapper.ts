import type { Invoice } from '@module-invoice/domain/interfaces';
import type { GetContactInvoicesResponse } from '../../domain/interfaces';
import type { GetContactInvoicesResult } from '../interfaces';
import type { GetContactInvoicesResponseDTO } from '../dtos';

export class GetContactInvoicesMapper {
  static mapFrom(
    input: GetContactInvoicesResponseDTO,
  ): GetContactInvoicesResponse {
    return {
      count: input?.count,
      cycle: input?.extra?.cycle,
      invoices: input?.results?.map(GetContactInvoicesMapper.mapFromArray),
      next: input?.next,
      previous: input?.previous,
      status: input?.status,
      success: input?.success,
    };
  }

  static mapFromArray(input: GetContactInvoicesResult): Invoice {
    return {
      amountToPayBs: {
        amount: input?.amount_to_pay_bs?.amount,
        ivaAmount: input?.amount_to_pay_bs?.iva_amount,
        subTotal: input?.amount_to_pay_bs?.sub_total,
      },
      amountToPayUsd: {
        amount: input?.amount_to_pay_usd?.amount,
        ivaAmount: input?.amount_to_pay_usd?.iva_amount,
        subTotal: input?.amount_to_pay_usd?.sub_total,
      },
      bankAssociatedData: {
        bankAccountNumber: input?.bank_associated_data?.bank_account_number,
        bankAcronym: input?.bank_associated_data?.bank_acronym,
        bankCode: input?.bank_associated_data?.bank_code,
        bankIdentification: input?.bank_associated_data?.bank_identification,
        bankName: input?.bank_associated_data?.bank_name,
        bankPhone: input?.bank_associated_data?.bank_phone,
      },
      id: input?.id,
      contractId: input?.contract_id,
      dateEmission: input?.date_emission,
      datePayment: input?.date_payment,
      documentNumber: input?.document_number,
      paymentMethods: input?.payment_methods,
      statusCode: input?.status_code,
      statusName: input?.status_name,
      datetime_payment: input?.datetime_payment,
    };
  }
}
