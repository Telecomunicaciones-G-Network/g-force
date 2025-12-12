import type { InvoicePaymentMethod } from '@module-invoice/domain/types';

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
  id: number;
  amount_to_pay_bs: GetContactInvoicesResultAmountToPayBS;
  amount_to_pay_usd: GetContactInvoicesResultAmountToPayUSD;
  amount: number;
  contract_id: number;
  date_emission: string;
  date_payment: string | null;
  document_number: string | null;
  invoices_items_gsoft: GetContactInvoicesResultInvoicesItemsGsoft[];
  payment_methods: InvoicePaymentMethod[];
  status_code: string;
  status_name: string;
}
