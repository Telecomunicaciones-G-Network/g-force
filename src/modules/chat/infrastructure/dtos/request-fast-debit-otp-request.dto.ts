export interface RequestFastDebitOTPRequestDTO {
  amount: number;
  bank_code: string;
  customer_name: string;
  id_number: string;
  invoice_id: number;
  phone_number: string;
}
