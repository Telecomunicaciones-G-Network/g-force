export interface ProcessFastDebitPaymentRequestDTO {
  amount: number;
  bank_code: string;
  customer_name: string;
  id_number: string;
  invoice_id: number;
  otp: string;
  phone_number: string;
}
