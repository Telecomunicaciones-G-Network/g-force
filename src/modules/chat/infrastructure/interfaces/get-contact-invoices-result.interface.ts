import type {
  InvoicePaymentMethod,
  InvoiceStatusCode,
  InvoiceStatusName,
} from '@module-invoice/domain/types';

export interface GetContactInvoicesResultAmountToPayBS {
  amount: number;
  iva_amount: number;
  sub_total: number;
}

export interface GetContactInvoicesResultAmountToPayUSD {
  amount: number;
  iva_amount: number;
  sub_total: number;
}

export interface GetContactInvoicesResultInvoicesItemsGsoft {
  details: string;
  service_name: string;
  service: number;
}

export interface GetContactInvoicesResult {
  amount: number;
  id: number;
  amount_to_pay_bs: GetContactInvoicesResultAmountToPayBS;
  amount_to_pay_usd: GetContactInvoicesResultAmountToPayUSD;
  bank_associated_data: {
    bank_account_number: string;
    bank_acronym: string;
    bank_code: string;
    bank_identification: string;
    bank_name: string;
    bank_phone: string;
  };
  contract_id: number;
  date_emission: string;
  date_payment: string | null;
  document_number: string | null;
  invoices_items_gsoft: GetContactInvoicesResultInvoicesItemsGsoft[];
  payment_methods: InvoicePaymentMethod[] | null;
  status_code: InvoiceStatusCode;
  status_name: InvoiceStatusName;
}
