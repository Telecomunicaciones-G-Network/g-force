import type { ChatInvoiceCardProps } from './chat-invoice-card.props';

import { Separator } from '@gnetwork-ui/components/atoms/separators/separator';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Tag } from '@gnetwork-ui/components/molecules/tags/tag';
import { Accordion } from '@gnetwork-ui/components/organisms/accordions/accordion';

import styles from './chat-invoice-card.module.css';

export const ChatInvoiceCard = ({
  amount = '',
  billingCycle = '',
  number = '',
  issueDate = '',
  open = false,
  paymentDate = '',
  paymentMethod = '',
  title = '',
  status = '',
}: Readonly<ChatInvoiceCardProps>) => (
  <Accordion fullWidth open={open} label={title}>
    <div className={styles.base}>
      {number && (
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
              {number}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {billingCycle && (
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
            <Tag color="blue">{billingCycle}</Tag>
          </div>
          <Separator />
        </>
      )}
      {issueDate && (
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
              {issueDate}
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
              {amount}
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
            <Tag color="green">{status}</Tag>
          </div>
          <Separator />
        </>
      )}
      {paymentDate && (
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
              {paymentDate}
            </Text>
          </div>
          <Separator />
        </>
      )}
      {paymentMethod && (
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
            {paymentMethod}
          </Text>
        </div>
      )}
    </div>
  </Accordion>
);
