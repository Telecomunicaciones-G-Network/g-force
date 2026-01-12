import { z as zod } from 'zod';

import { floatingModalPaymentReportMobilePaymentManualFormDataSchema } from '../schemas/floating-modal-payment-report-mobile-payment-manual-form-data.schema';

export type FloatingModalPaymentReportMobilePaymentManualFormData = zod.infer<
  typeof floatingModalPaymentReportMobilePaymentManualFormDataSchema
>;
