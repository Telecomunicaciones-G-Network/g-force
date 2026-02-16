import { z as zod } from 'zod';

import { floatingModalPaymentReportFastDebitFormDataSchema } from '../schemas/floating-modal-payment-report-fast-debit-form-data.schema';

export type FloatingModalPaymentReportFastDebitFormData = zod.infer<
  typeof floatingModalPaymentReportFastDebitFormDataSchema
>;
