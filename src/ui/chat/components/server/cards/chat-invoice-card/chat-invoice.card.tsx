'use client';

import type { ChatInvoiceCardProps } from './chat-invoice-card.props';

import dayjs from 'dayjs';

import { Separator } from '@gnetwork-ui/components/atoms/separators/separator';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { Tag } from '@gnetwork-ui/components/molecules/tags/tag';
import { Accordion } from '@gnetwork-ui/components/organisms/accordions/accordion';

import { TagColors } from '@gnetwork-ui/components/molecules/tags/tag/enums/tag-colors.enum';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { invoiceStatusTagColorDictionary } from '@ui-chat/dictionaries/invoice-status-tag-color.dictionary';

import { CHAT_INVOICE_CARD_STATUS_FOR_PAY } from './constants/chat-invoice-card-status-for-pay.constant';

import styles from './chat-invoice-card.module.css';

export const ChatInvoiceCard = ({
  invoice,
  onPayment,
  open = false,
  title = '',
}: Readonly<ChatInvoiceCardProps>) => {
  const {
    amountToPayBs,
    amountToPayUsd,
    cycle = '',
    dateEmission,
    datePayment,
    datetime_payment,
    documentNumber,
    paymentMethods = [],
    statusName,
  } = invoice;

  return (
    <Accordion
      className={cn(
        CHAT_INVOICE_CARD_STATUS_FOR_PAY.includes(statusName) &&
          'border-t-4 border-solid border-t-red-600',
      )}
      fullWidth
      open={open}
      label={title}
    >
      <div className={styles.base}>
        {documentNumber && (
          <>
            <div className={styles.base__info}>
              <Text
                as="label"
                className="text-neutral-900"
                level="small"
                scheme="label"
              >
                Factura N.º:
              </Text>
              <Text
                as="span"
                align="end"
                className="text-neutral-400"
                level="small"
                scheme="label"
              >
                {documentNumber}
              </Text>
            </div>
            <Separator />
          </>
        )}
        {cycle && (
          <>
            <div className={styles.base__info}>
              <Text
                as="label"
                className="text-neutral-900"
                level="small"
                scheme="label"
              >
                Ciclo de facturación:
              </Text>
              <Tag color="blue">{cycle}</Tag>
            </div>
            <Separator />
          </>
        )}
        {dateEmission && (
          <>
            <div className={styles.base__info}>
              <Text
                as="label"
                className="text-neutral-900"
                level="small"
                scheme="label"
              >
                Fecha de emisión:
              </Text>
              <Text
                as="span"
                align="end"
                className="text-neutral-400"
                level="small"
                scheme="label"
              >
                {dayjs(dateEmission).format('DD/MM/YYYY')}
              </Text>
            </div>
            <Separator />
          </>
        )}
        {(amountToPayBs?.amount || amountToPayUsd?.amount) && (
          <>
            <div className={styles.base__info}>
              <Text
                as="label"
                className="text-neutral-900"
                level="small"
                scheme="label"
              >
                Monto:
              </Text>
              <Text
                as="span"
                align="end"
                className="text-neutral-400"
                level="small"
                scheme="label"
              >
                {amountToPayBs?.amount &&
                  `${amountToPayBs?.amount.toFixed(2).replace('.', ',')} Bs`}{' '}
                {(amountToPayBs?.amount || amountToPayUsd?.amount) && '≈ '}
                {amountToPayUsd?.amount &&
                  `${amountToPayUsd?.amount.toFixed(2).replace('.', ',')}$`}
              </Text>
            </div>
            <Separator />
          </>
        )}
        {statusName && (
          <div className={styles.base__info}>
            <Text
              as="label"
              className="text-neutral-900"
              level="small"
              scheme="label"
            >
              Estado:
            </Text>
            <Tag
              color={
                invoiceStatusTagColorDictionary?.[statusName] ?? TagColors.GRAY
              }
            >
              {statusName}
            </Tag>
          </div>
        )}
        {datePayment && (
          <>
            <Separator />
            <div className={styles.base__info}>
              <Text
                as="label"
                className="text-neutral-900"
                level="small"
                scheme="label"
              >
                Fecha de pago:
              </Text>
              <Text
                as="span"
                align="end"
                className="whitespace-nowrap text-neutral-400"
                level="small"
                scheme="label"
              >
                {dayjs(datetime_payment).format('DD/MM/YYYY HH:mm a')}
              </Text>
            </div>
          </>
        )}
        {paymentMethods && paymentMethods.length > 0 && paymentMethods?.[0] && (
          <>
            <Separator />
            <div className={styles.base__info}>
              <Text
                as="label"
                className="text-neutral-900"
                level="small"
                scheme="label"
              >
                Método:
              </Text>
              <Text
                as="span"
                align="end"
                className="text-neutral-400"
                level="small"
                scheme="label"
              >
                {paymentMethods?.[0]}
              </Text>
            </div>
          </>
        )}
        {CHAT_INVOICE_CARD_STATUS_FOR_PAY.includes(statusName) && (
          <Button color="red" fullWidth onClick={() => onPayment?.(invoice)}>
            Pagar
          </Button>
        )}
      </div>
    </Accordion>
  );
};
