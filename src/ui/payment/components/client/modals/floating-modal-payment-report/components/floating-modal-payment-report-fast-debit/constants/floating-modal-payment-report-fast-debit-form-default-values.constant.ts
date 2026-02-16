import type { FloatingModalPaymentReportFastDebitFormData } from '../types';

export const FLOATING_MODAL_PAYMENT_REPORT_FAST_DEBIT_FORM_DEFAULT_VALUES = (
  defaultAmount?: string,
): FloatingModalPaymentReportFastDebitFormData => ({
  amount: defaultAmount ?? '',
  bankCode: '',
  phoneNumber: '',
  clientName: '',
  documentType: 'V',
  documentNumber: '',
});
