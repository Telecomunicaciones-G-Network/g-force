'use client';

import type { GetFastDebitBanksResponse } from '@module-chat/domain/interfaces';
import type { FloatingModalPaymentReportFastDebitFormData } from './types';
import type { Invoice } from '@module-invoice/domain/interfaces';
import type { RequestFastDebitOTPResponse } from '@module-chat/domain/interfaces';

import { useState, useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useToast } from '@gnetwork-ui/components/organisms/toasts/toast/toast.hook';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { GetFastDebitBanksQuery } from '@module-chat/infrastructure/queries/get-fast-debit-banks.query';

import { FLOATING_MODAL_PAYMENT_REPORT_FAST_DEBIT_FORM_DEFAULT_VALUES } from './constants/floating-modal-payment-report-fast-debit-form-default-values.constant';

import { floatingModalPaymentReportFastDebitFormDataSchema } from './schemas/floating-modal-payment-report-fast-debit-form-data.schema';

import { RequestFastDebitOTPCommand } from '@module-chat/infrastructure/commands/request-fast-debit-otp.command';
import { ProcessFastDebitPaymentCommand } from '@module-chat/infrastructure/commands/process-fast-debit-payment.command';

import { isoDateToSeconds } from '@packages/timer/utils/iso-date-to-seconds.util';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

interface UseFloatingModalPaymentReportFastDebitProps {
  invoice: Invoice;
  onSuccessPayment?: () => void;
}

export const useFloatingModalPaymentReportFastDebit = ({
  invoice,
  onSuccessPayment = () => null,
}: Readonly<UseFloatingModalPaymentReportFastDebitProps>) => {
  const activeContact = useContactStore((state) => state.activeContact);
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const [mode, setMode] = useState<'form' | 'otp'>('form');
  const [storeFormData, setStoreFormData] =
    useState<FloatingModalPaymentReportFastDebitFormData | null>(null);
  const [otp, setOtp] = useState<string>('');
  const [countdown, setCountdown] = useState<number>(90); // 1 minuto y medio = 90 segundos

  const {
    clearErrors: clearErrorsForm,
    control,
    handleSubmit,
  } = useForm<FloatingModalPaymentReportFastDebitFormData>({
    defaultValues: FLOATING_MODAL_PAYMENT_REPORT_FAST_DEBIT_FORM_DEFAULT_VALUES(
      invoice?.amountToPayBs?.amount.toFixed(2).replace('.', ','),
    ),
    mode: 'onSubmit',
    resolver: zodResolver(floatingModalPaymentReportFastDebitFormDataSchema),
    reValidateMode: 'onSubmit',
  });

  // Countdown timer effect
  useEffect(() => {
    if (mode === 'otp' && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [mode, countdown]);

  // Check when countdown reaches 0
  useEffect(() => {
    if (mode === 'otp' && countdown === 0 && otp.length < 8) {
      setMode('form');
      setOtp('');
      setStoreFormData(null);
      showToast('El tiempo para ingresar el OTP ha expirado', {
        id: 'otp-timeout',
        position: 'top-right',
      });
    }
  }, [mode, countdown, otp.length, showToast]);

  const { data } = useQuery<GetFastDebitBanksResponse>({
    queryKey: [CHAT_TAGS.GET_FAST_DEBIT_BANKS],
    queryFn: () => GetFastDebitBanksQuery(),
    enabled: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
  });

  const { mutate: requestFastDebitOTP, isPending } = useMutation({
    mutationFn: RequestFastDebitOTPCommand,
    onSuccess: (data: RequestFastDebitOTPResponse) => {
      if (data?.otpExpirationTime) {
        const otpExpirationTime = isoDateToSeconds(data.otpExpirationTime);

        setCountdown(otpExpirationTime > 0 ? otpExpirationTime : 90);
      }

      setMode('otp');
    },
    onError: (error: Error) => {
      console.log(error);

      showToast('Error al solicitar el OTP 23', {
        id: 'request-fast-debit-otp-error',
        position: 'top-right',
      });
    },
  });

  const { mutate: processFastDebitPayment, isPending: isProcessing } =
    useMutation({
      mutationFn: ProcessFastDebitPaymentCommand,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [
            CHAT_TAGS.GET_CHAT_CONTACT_INVOICES,
            activeContact?.id,
            { page_size: 20, page: 1 },
          ],
        });
        onSuccessPayment?.();
      },
      onError: (_error: Error) => {
        showToast('Error al procesar el pago', {
          id: 'process-fast-debit-payment-error',
          position: 'top-right',
        });
        setMode('form');
        setOtp('');
        setStoreFormData(null);
      },
    });

  const clearErrors = (
    fieldName?:
      | keyof FloatingModalPaymentReportFastDebitFormData
      | (keyof FloatingModalPaymentReportFastDebitFormData)[],
  ) => {
    clearErrorsForm(fieldName);
  };

  const onSubmit = (data: FloatingModalPaymentReportFastDebitFormData) => {
    if (
      !data?.amount ||
      !data?.bankCode ||
      !data?.phoneNumber ||
      !data?.documentType ||
      !data?.documentNumber ||
      !data?.clientName ||
      !invoice?.id
    ) {
      // TODO: Register error
      showToast('Error al procesar el pago', {
        id: 'process-fast-debit-payment-error',
        position: 'top-right',
      });

      return;
    }

    setStoreFormData(data);
    requestFastDebitOTP({
      amount: +data?.amount?.replace(',', '.'),
      bankCode: data?.bankCode,
      customerDocument: `${data?.documentType}${data?.documentNumber}`,
      customerName: data?.clientName,
      invoiceId: invoice?.id,
      phoneNumber: data?.phoneNumber,
    });
  };

  const validatePayment = () => {
    if (
      !storeFormData?.amount ||
      !storeFormData?.bankCode ||
      !storeFormData?.phoneNumber ||
      !storeFormData?.documentType ||
      !storeFormData?.documentNumber ||
      !storeFormData?.clientName ||
      !invoice?.id ||
      !otp
    ) {
      // TODO: Register error
      showToast('Error al procesar el pago', {
        id: 'process-fast-debit-payment-error',
        position: 'top-right',
      });

      return;
    }

    processFastDebitPayment({
      otpCode: otp,
      invoiceId: invoice?.id,
      amount: +storeFormData?.amount?.replace(',', '.'),
      bankCode: storeFormData?.bankCode,
      phoneNumber: storeFormData?.phoneNumber,
      customerDocument: `${storeFormData?.documentType}${storeFormData?.documentNumber}`,
      customerName: storeFormData?.clientName,
    });
  };

  return {
    banks: data?.banks ?? [],
    clearErrors,
    control,
    handleSubmit,
    onSubmit,
    mode,
    isPending,
    otp,
    setOtp,
    countdown,
    validatePayment,
    isProcessing,
  };
};
