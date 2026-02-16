import type { ApiBaseResponse } from '@module-core/interfaces';
import type { PaymentType } from '@module-payment/domain/types';

export interface GetAvailableReportPaymentMethodsResponse
  extends Pick<ApiBaseResponse, 'error' | 'status' | 'success'> {
  paymentMethods: Record<PaymentType, boolean>;
}
