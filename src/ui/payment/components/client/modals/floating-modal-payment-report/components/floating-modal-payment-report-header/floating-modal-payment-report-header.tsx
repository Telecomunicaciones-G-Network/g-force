import type { FloatingModalPaymentReportProps } from '../../floating-modal-payment-report.props';

import { MdClose, MdOutlinePayments } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { IconBadge } from '@gnetwork-ui/components/molecules/badges/icon-badge';

import { cn } from '@gnetwork-ui/utils/cn.util';

import styles from './floating-modal-payment-report-header.module.css';

export const FloatingModalPaymentReportHeader = ({
  invoice,
  onClose,
}: Readonly<FloatingModalPaymentReportProps>) => (
  <div className={styles.base}>
    <div className={styles.base__header}>
      <div className={styles.base__header_icons}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="24"
          viewBox="0 0 10 24"
          fill="none"
          aria-label="Draggable"
        >
          <title>Draggable</title>
          <path
            d="M1.61525 19.6153C1.17108 19.6153 0.790833 19.4571 0.4745 19.1408C0.158166 18.8244 0 18.4442 0 18C0 17.5558 0.158166 17.1756 0.4745 16.8593C0.790833 16.5429 1.17108 16.3848 1.61525 16.3848C2.05942 16.3848 2.43967 16.5429 2.756 16.8593C3.07233 17.1756 3.2305 17.5558 3.2305 18C3.2305 18.4442 3.07233 18.8244 2.756 19.1408C2.43967 19.4571 2.05942 19.6153 1.61525 19.6153ZM7.61525 19.6153C7.17108 19.6153 6.79083 19.4571 6.4745 19.1408C6.15817 18.8244 6 18.4442 6 18C6 17.5558 6.15817 17.1756 6.4745 16.8593C6.79083 16.5429 7.17108 16.3848 7.61525 16.3848C8.05942 16.3848 8.43967 16.5429 8.756 16.8593C9.07233 17.1756 9.2305 17.5558 9.2305 18C9.2305 18.4442 9.07233 18.8244 8.756 19.1408C8.43967 19.4571 8.05942 19.6153 7.61525 19.6153ZM1.61525 13.6153C1.17108 13.6153 0.790833 13.4571 0.4745 13.1408C0.158166 12.8244 0 12.4442 0 12C0 11.5558 0.158166 11.1756 0.4745 10.8593C0.790833 10.5429 1.17108 10.3848 1.61525 10.3848C2.05942 10.3848 2.43967 10.5429 2.756 10.8593C3.07233 11.1756 3.2305 11.5558 3.2305 12C3.2305 12.4442 3.07233 12.8244 2.756 13.1408C2.43967 13.4571 2.05942 13.6153 1.61525 13.6153ZM7.61525 13.6153C7.17108 13.6153 6.79083 13.4571 6.4745 13.1408C6.15817 12.8244 6 12.4442 6 12C6 11.5558 6.15817 11.1756 6.4745 10.8593C6.79083 10.5429 7.17108 10.3848 7.61525 10.3848C8.05942 10.3848 8.43967 10.5429 8.756 10.8593C9.07233 11.1756 9.2305 11.5558 9.2305 12C9.2305 12.4442 9.07233 12.8244 8.756 13.1408C8.43967 13.4571 8.05942 13.6153 7.61525 13.6153ZM1.61525 7.61526C1.17108 7.61526 0.790833 7.4571 0.4745 7.14077C0.158166 6.82443 0 6.44418 0 6.00002C0 5.55585 0.158166 5.1756 0.4745 4.85927C0.790833 4.54293 1.17108 4.38477 1.61525 4.38477C2.05942 4.38477 2.43967 4.54293 2.756 4.85927C3.07233 5.1756 3.2305 5.55585 3.2305 6.00002C3.2305 6.44418 3.07233 6.82443 2.756 7.14077C2.43967 7.4571 2.05942 7.61526 1.61525 7.61526ZM7.61525 7.61526C7.17108 7.61526 6.79083 7.4571 6.4745 7.14077C6.15817 6.82443 6 6.44418 6 6.00002C6 5.55585 6.15817 5.1756 6.4745 4.85927C6.79083 4.54293 7.17108 4.38477 7.61525 4.38477C8.05942 4.38477 8.43967 4.54293 8.756 4.85927C9.07233 5.1756 9.2305 5.55585 9.2305 6.00002C9.2305 6.44418 9.07233 6.82443 8.756 7.14077C8.43967 7.4571 8.05942 7.61526 7.61525 7.61526Z"
            fill="black"
          />
        </svg>
        <IconBadge
          icon={
            <MdOutlinePayments className="fill-red-600 min-h-6 min-w-6 rotate-y-180 size-6" />
          }
        />
      </div>
      <div className={styles.base__header_content}>
        <Text
          className="text-chromatic-inverted"
          level="xsmall"
          scheme="heading"
        >
          Pagar
        </Text>
        {invoice?.documentNumber && (
          <Text className="text-neutral-700" level="small" scheme="paragraph">
            Factura {invoice?.documentNumber}
          </Text>
        )}
      </div>
    </div>
    <button
      aria-label="Close Payment Report Floating Modal"
      onClick={onClose}
      type="button"
    >
      <MdClose
        className={cn(
          styles.base__close_icon,
          'fill-chromatic-inverted min-h-6 min-w-6 size-6',
        )}
      />
    </button>
  </div>
);
