'use client';

import type { Invoice } from '@module-invoice/domain/interfaces';

import type { FileData } from '@gnetwork-ui/components/molecules/inputs/file-input';

import { useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';

import { isFileSizeValid } from '@filer/utils/is-file-size-valid.util';

import { formatFileSize } from '@filer/utils/format-file-size.util';
import { IMAGE_MIMETYPES_ALLOWED } from '@module-core/constants/image-mimetypes-allowed.constant';
import { MAXIMUM_ALLOWED_FILE_SIZE } from '@module-core/constants/maximum-allowed-file-size.constant';
import { isFileMimetypeValid } from '@filer/utils/is-file-mimetype-valid.util';

import { AlertSchemes } from '@gnetwork-ui/components/molecules/alerts/alert/enums/alert-scheme.enum';

import { useToast } from '@gnetwork-ui/components/organisms/toasts/toast/toast.hook';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

import { validateMobilePaymentWithImageService } from '@module-chat/infrastructure/services/validate-mobile-payment-with-image.service';

interface UseFloatingModalPaymentReportMobilePaymentAutomaticProps {
  invoice: Invoice;
  onClose?: () => void;
  onSuccessPayment?: () => void;
}

export const useFloatingModalPaymentReportMobilePaymentAutomatic = ({
  invoice,
  onSuccessPayment,
}: Readonly<UseFloatingModalPaymentReportMobilePaymentAutomaticProps>) => {
  const activeContact = useContactStore((state) => state.activeContact);
  const queryClient = useQueryClient();
  const [file, setFile] = useState<FileData | null>(null);
  const { showToast } = useToast();

  const { mutate: validateMobilePayment, isPending } = useMutation({
    mutationFn: validateMobilePaymentWithImageService,
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

  const attachImageFiles = (fileData: FileData[]) => {
    if (!isFileSizeValid(fileData?.[0]?.size, MAXIMUM_ALLOWED_FILE_SIZE)) {
      showToast(
        `El archivo no debe exceder los ${formatFileSize(MAXIMUM_ALLOWED_FILE_SIZE)}`,
        {
          className: 'min-w-[min(380px,100%)]',
          duration: 3000,
          id: 'chat-conversation-file-attach-dropdown-toast',
          position: 'top-right',
          scheme: AlertSchemes.ERROR,
        },
      );

      return;
    }

    if (!isFileMimetypeValid(fileData?.[0]?.type, IMAGE_MIMETYPES_ALLOWED)) {
      showToast('El formato del archivo no es permitido como imagen', {
        className: 'min-w-[min(380px,100%)]',
        duration: 3000,
        id: 'chat-conversation-file-attach-dropdown-toast',
        position: 'top-right',
        scheme: AlertSchemes.ERROR,
      });

      return;
    }
    setFile(fileData?.[0] ?? null);
  };

  const validateMobilePaymentWithImage = () => {
    /*if (
      !file ||
      !invoice?.bankAssociatedData?.bankCode ||
      !invoice?.contractId ||
      !invoice?.id
    )
      // TODO: Show alert on error
      // TODO: Register error
      return;*/

    // TODO: Delete this line after recovery the before block
    if (!file) return;

    validateMobilePayment({
      bank_destination_code: invoice?.bankAssociatedData?.bankCode,
      contract_id: invoice?.contractId,
      invoice_id: invoice?.id,
      image: file?.file,
    });
  };

  return {
    attachImageFiles,
    file,
    validateMobilePaymentWithImage,
    isPending,
  };
};
