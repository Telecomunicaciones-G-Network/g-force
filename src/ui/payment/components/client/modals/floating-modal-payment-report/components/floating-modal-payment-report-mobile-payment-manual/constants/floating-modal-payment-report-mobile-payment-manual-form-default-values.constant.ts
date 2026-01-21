import type { FloatingModalPaymentReportMobilePaymentManualFormData } from '../types';

export const FLOATING_MODAL_PAYMENT_REPORT_MOBILE_PAYMENT_MANUAL_FORM_DEFAULT_VALUES =
  (
    defaultAmount?: string,
  ): FloatingModalPaymentReportMobilePaymentManualFormData => ({
    amount: defaultAmount ?? '',
    phoneNumber: '',
    bankReferenceNumber: '',
    date: undefined,
  });
