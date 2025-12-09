import type { ChatInvoiceCardProps } from './chat-invoice-card.props';

import { InvoiceStatus } from '@module-invoice/domain/enums/invoice-status.enum';

import { Separator } from '@gnetwork-ui/components/atoms/separators/separator';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Tag } from '@gnetwork-ui/components/molecules/tags/tag';
import { Accordion } from '@gnetwork-ui/components/organisms/accordions/accordion';

import { TagColors } from '@gnetwork-ui/components/molecules/tags/tag/enums/tag-colors.enum';

import styles from './chat-invoice-card.module.css';

export const ChatInvoiceCard = ({
  amount,
  dateEmission,
  datePayment,
  documentNumber,
  invoicingCycle = '',
  open = false,
  paymentMethods = [],
  status,
  title = '',
}: Readonly<ChatInvoiceCardProps>) => (
  <Accordion fullWidth open={open} label={title}>
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
      {invoicingCycle && (
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
            <Tag color="blue">{invoicingCycle}</Tag>
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
              {dateEmission}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {amount && (
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
              ${amount.toFixed(2).replace('.', ',')}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {status && (
        <>
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
                status === InvoiceStatus.PAID
                  ? TagColors.GREEN
                  : TagColors.YELLOW
              }
            >
              {status}
            </Tag>
          </div>
          <Separator />
        </>
      )}
      {datePayment && (
        <>
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
              className="text-neutral-400"
              level="small"
              scheme="label"
            >
              {datePayment}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {paymentMethods && paymentMethods.length > 0 && paymentMethods?.[0] && (
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
      )}
    </div>
  </Accordion>
);
