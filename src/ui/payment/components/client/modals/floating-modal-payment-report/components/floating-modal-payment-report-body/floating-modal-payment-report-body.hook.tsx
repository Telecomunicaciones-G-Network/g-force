'use client';

import type { GetAvailableReportPaymentMethodsResponse } from '@module-chat/domain/interfaces';
import type { PaymentType } from '@module-payment/domain/types';

import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { getAvailableReportPaymentMethodsQuery } from '@module-chat/infrastructure/queries/get-available-report-payment-methods.query';

export const useFloatingModalPaymentReportBody = () => {
  const [paymentTypeSelected, setPaymentTypeSelected] = useState<PaymentType>();

  useQuery<GetAvailableReportPaymentMethodsResponse>({
    queryKey: [CHAT_TAGS.GET_AVAILABLE_REPORT_PAYMENT_METHODS],
    queryFn: () => getAvailableReportPaymentMethodsQuery(),
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
  });

  const onPaymentTypeSelectChange = (value: string) =>
    setPaymentTypeSelected(value as PaymentType);

  return {
    onPaymentTypeSelectChange,
    paymentTypeSelected,
  };
};
