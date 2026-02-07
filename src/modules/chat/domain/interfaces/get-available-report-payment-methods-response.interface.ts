import type { ApiResponse } from '@module-core/interfaces';
import type { PaymentType } from '@module-payment/domain/types';

export interface GetAvailableReportPaymentMethodsResponse
  extends Pick<ApiResponse, 'error' | 'status' | 'success'> {
  paymentMethods: Record<PaymentType, boolean>;
}
