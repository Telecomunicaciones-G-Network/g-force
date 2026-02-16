export interface ProcessFastDebitPaymentRequest {
  amount: number;
  bankCode: string;
  customerDocument: string;
  customerName: string;
  invoiceId: number;
  otpCode: string;
  phoneNumber: string;
}
