'use client';

import type { Invoice } from '@module-invoice/domain/interfaces';
import type { FloatingModalPaymentReportMobilePaymentManualFormData } from './types';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';

import { FLOATING_MODAL_PAYMENT_REPORT_MOBILE_PAYMENT_MANUAL_FORM_DEFAULT_VALUES } from './constants/floating-modal-payment-report-mobile-payment-manual-form-default-values.constant';

import { floatingModalPaymentReportMobilePaymentManualFormDataSchema } from './schemas/floating-modal-payment-report-mobile-payment-manual-form-data.schema';

import { validateMobilePaymentService } from '@module-chat/infrastructure/services/validate-mobile-payment.service';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { useToast } from '@gnetwork-ui/components/organisms/toasts/toast/toast.hook';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

interface UseFloatingModalPaymentReportMobilePaymentManualProps {
  invoice: Invoice;
  onClose?: () => void;
  onSuccessPayment?: () => void;
}

export const useFloatingModalPaymentReportMobilePaymentManual = ({
  invoice,
  onSuccessPayment,
}: Readonly<UseFloatingModalPaymentReportMobilePaymentManualProps>) => {
  const activeContact = useContactStore((state) => state.activeContact);
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const {
    clearErrors: clearErrorsForm,
    control,
    handleSubmit,
  } = useForm<FloatingModalPaymentReportMobilePaymentManualFormData>({
    defaultValues:
      FLOATING_MODAL_PAYMENT_REPORT_MOBILE_PAYMENT_MANUAL_FORM_DEFAULT_VALUES(
        invoice?.amountToPayBs?.amount.toFixed(2).replace('.', ','),
      ),
    mode: 'onSubmit',
    resolver: zodResolver(
      floatingModalPaymentReportMobilePaymentManualFormDataSchema,
    ),
    reValidateMode: 'onSubmit',
  });

  const { mutate: validateMobilePayment, isPending } = useMutation({
    mutationFn: validateMobilePaymentService,
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
      showToast('Error al validar el pago móvil', {
        id: 'validate-mobile-payment-error',
        position: 'top-right',
      });
    },
  });

  const clearErrors = (
    fieldName?:
      | keyof FloatingModalPaymentReportMobilePaymentManualFormData
      | (keyof FloatingModalPaymentReportMobilePaymentManualFormData)[],
  ) => {
    clearErrorsForm(fieldName);
  };

  const onSubmit = (
    data: FloatingModalPaymentReportMobilePaymentManualFormData,
  ) => {
    if (
      !data?.amount ||
      !data?.phoneNumber ||
      !data?.bankReferenceNumber ||
      !data?.date ||
      !invoice?.bankAssociatedData?.bankCode ||
      !invoice?.contractId ||
      !invoice?.id
    ) {
      showToast('Error al procesar el pago', {
        id: 'process-mobile-payment-manual-error',
        position: 'top-right',
      });

      // TODO: Register error
      return;
    }

    validateMobilePayment({
      amount: +data?.amount?.replace(',', '.'),
      bank_destination_code: invoice?.bankAssociatedData?.bankCode,
      contract_id: invoice?.contractId,
      date: dayjs(data?.date).format('YYYY-MM-DD'),
      invoice_id: invoice?.id,
      payment_phone: data?.phoneNumber,
      reference: data?.bankReferenceNumber,
    });
  };

  return { clearErrors, control, handleSubmit, isPending, onSubmit };
};
