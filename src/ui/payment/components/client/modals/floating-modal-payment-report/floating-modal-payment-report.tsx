'use client';

import { FloatingModalPaymentReportProps } from './floating-modal-payment-report.props';

import { FloatingCardModal } from '@gnetwork-ui/components/organisms/modals/floating-card-modal';

import { FloatingModalPaymentReportBody } from './components/floating-modal-payment-report-body';
import { FloatingModalPaymentReportHeader } from './components/floating-modal-payment-report-header';

import { useFloatingModalPaymentReport } from './floating-modal-payment-report.hook';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import Image from 'next/image';

export const FloatingModalPaymentReport = ({
  invoice,
  onClose,
}: Readonly<FloatingModalPaymentReportProps>) => {
  const { changeToSuccessPayment, successPayment } =
    useFloatingModalPaymentReport();

  return (
    <FloatingCardModal>
      {!successPayment && (
        <>
          <FloatingModalPaymentReportHeader
            invoice={invoice}
            onClose={onClose}
          />
          <FloatingModalPaymentReportBody
            onSuccessPayment={changeToSuccessPayment}
            invoice={invoice}
            onClose={onClose}
          />
        </>
      )}
      {successPayment && (
        <div className="flex flex-col pt-10 px-4 pb-4 gap-[24px]">
          <div className="flex justify-center items-center flex-col gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="74"
              height="74"
              viewBox="0 0 74 74"
              fill="none"
              aria-label="Pago reportado"
            >
              <title>Pago reportado</title>
              <path
                d="M32.6246 43.6173L25.462 36.4539C25.035 36.0274 24.4982 35.809 23.8518 35.7987C23.2058 35.789 22.6593 36.0074 22.2122 36.4539C21.7656 36.901 21.5424 37.4426 21.5424 38.0788C21.5424 38.715 21.7656 39.2567 22.2122 39.7038L30.6737 48.1652C31.2312 48.7222 31.8815 49.0008 32.6246 49.0008C33.3677 49.0008 34.018 48.7222 34.5756 48.1652L51.7297 31.0111C52.1563 30.584 52.3747 30.0473 52.3849 29.4008C52.3947 28.7548 52.1763 28.2083 51.7297 27.7612C51.2827 27.3147 50.741 27.0914 50.1048 27.0914C49.4686 27.0914 48.927 27.3147 48.4799 27.7612L32.6246 43.6173ZM37.006 66.2913C32.9545 66.2913 29.1464 65.5226 25.5815 63.985C22.0167 62.4475 18.9159 60.3608 16.2791 57.7251C13.6423 55.0893 11.5547 51.9898 10.0161 48.4265C8.47802 44.8632 7.70898 41.0561 7.70898 37.0051C7.70898 32.9536 8.47776 29.1454 10.0153 25.5805C11.5529 22.0157 13.6395 18.9149 16.2753 16.2781C18.911 13.6414 22.0105 11.5537 25.5738 10.0151C29.1371 8.47704 32.9443 7.70801 36.9953 7.70801C41.0468 7.70801 44.8549 8.47678 48.4198 10.0143C51.9846 11.5519 55.0854 13.6385 57.7222 16.2743C60.359 18.91 62.4466 22.0095 63.9852 25.5728C65.5233 29.1361 66.2923 32.9433 66.2923 36.9943C66.2923 41.0458 65.5235 44.854 63.986 48.4188C62.4484 51.9837 60.3618 55.0845 57.726 57.7212C55.0903 60.358 51.9908 62.4457 48.4275 63.9842C44.8642 65.5223 41.057 66.2913 37.006 66.2913ZM37.0007 61.6663C43.8868 61.6663 49.7194 59.2768 54.4986 54.4976C59.2777 49.7184 61.6673 43.8858 61.6673 36.9997C61.6673 30.1136 59.2777 24.2809 54.4986 19.5018C49.7194 14.7226 43.8868 12.333 37.0007 12.333C30.1145 12.333 24.2819 14.7226 19.5027 19.5018C14.7236 24.2809 12.334 30.1136 12.334 36.9997C12.334 43.8858 14.7236 49.7184 19.5027 54.4976C24.2819 59.2768 30.1145 61.6663 37.0007 61.6663Z"
                fill="#C40E23"
              />
            </svg>
            <div className="flex flex-col gap-2 justify-center items-center">
              <Text
                className="text-chromatic-inverted"
                as="h3"
                scheme="heading"
                level="medium"
              >
                ¡Pago reportado!
              </Text>
              <Text
                as="span"
                className="text-chromatic-inverted"
                scheme="paragraph"
                level="small"
              >
                Tu reporte fue procesado con éxito.
              </Text>
              <div className="relative w-[236px] h-[280px]">
                <Image
                  src="/images/success_report_payment.png"
                  alt="Pago reportado"
                  fill
                  sizes="100%"
                  className="responsive-image-cover"
                />
              </div>
            </div>
          </div>
          <Button color="red" fullWidth type="button" onClick={onClose}>
            Cerrar
          </Button>
        </div>
      )}
    </FloatingCardModal>
  );
};
