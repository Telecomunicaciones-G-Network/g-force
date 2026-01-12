'use client';

import type { FloatingModalPaymentReportMobilePaymentAutomaticProps } from './floating-modal-payment-report-mobile-payment-automatic.props';

import { FileInput } from '@gnetwork-ui/components/molecules/inputs/file-input';

import { parseMimetypesToFileInputAccept } from '@/src/packages/filer/utils/parse-mimetypes-to-file-input-accept.util';
import { IMAGE_MIMETYPES_ALLOWED } from '@module-core/constants/image-mimetypes-allowed.constant';

import { MdAttachFile } from 'react-icons/md';

import { cn } from '@/src/packages/gnetwork-ui/utils/cn.util';

import Image from 'next/image';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import styles from './floating-modal-payment-report-mobile-payment-automatic.module.css';

import { useFloatingModalPaymentReportMobilePaymentAutomatic } from './floating-modal-payment-report-mobile-payment-automatic.hook';

export const FloatingModalPaymentReportMobilePaymentAutomatic = ({
  invoice,
  onClose = () => null,
}: Readonly<FloatingModalPaymentReportMobilePaymentAutomaticProps>) => {
  const { attachImageFiles, file, validateMobilePaymentWithImage, isPending } =
    useFloatingModalPaymentReportMobilePaymentAutomatic({
      invoice,
      onClose,
    });

  return (
    <div className={styles.base}>
      {!file && (
        <FileInput
          accept={parseMimetypesToFileInputAccept(IMAGE_MIMETYPES_ALLOWED)}
          fullWidth
          onFileSelect={attachImageFiles}
        >
          <div
            className={cn(
              styles.base__container,
              'gap-[6px] min-h-[40px] bg-chromatic py-2 px-3 w-full border border-solid border-input-border',
            )}
          >
            <MdAttachFile className="fill-neutral-500 min-h-6 min-w-6 size-6" />
            <span className="text-neutral-500 text-sm font-medium">
              Adjuntar Imagen
            </span>
          </div>
        </FileInput>
      )}
      {file && (
        <>
          <div className="relative w-full h-[367px] rounded-sm">
            <Image
              src={file?.preview ?? ''}
              alt="Imagen"
              fill
              sizes="100%"
              className="responsive-image-contain"
            />
          </div>
          <Button
            color="red"
            fullWidth
            disabled={isPending}
            loading={isPending}
            type="button"
            onClick={validateMobilePaymentWithImage}
          >
            Reportar Pago
          </Button>
        </>
      )}
    </div>
  );
};
