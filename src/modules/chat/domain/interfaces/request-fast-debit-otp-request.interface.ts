export interface RequestFastDebitOTPRequest {
  amount: number;
  bankCode: string;
  customerDocument: string;
  customerName: string;
  invoiceId: number;
  phoneNumber: string;
}
