import type { ChatInvoice } from '@ui-chat/interfaces';
import type { ChatInvoicesProps } from './chat-invoices.props';

import { Separator } from '@gnetwork-ui/components/atoms/separators/separator';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { ChatDetailsTabContentLayout } from '@ui-chat/layouts/chat-details-tab-content-layout';

import { ChatInvoiceCard } from '@ui-chat/components/server/cards/chat-invoice-card';

import { ChatInvoices as ChatInvoiceList } from '@ui-chat/iterators/chat-invoices.iterator';

import styles from './chat-invoices.module.css';

export const ChatInvoices = ({ title = '' }: Readonly<ChatInvoicesProps>) => (
  <ChatDetailsTabContentLayout title={title}>
    <div className={styles.base__header}>
      <div className={styles.base__info}>
        <Text
          as="span"
          className="text-neutral-900"
          level="small"
          scheme="label"
        >
          Ciclo de facturación:
        </Text>
        <Text
          as="span"
          className="text-end text-neutral-500"
          level="small"
          scheme="label"
        >
          Mensual
        </Text>
      </div>
      <Separator />
      <div className={styles.base__payment}>
        <Text
          as="span"
          className="text-neutral-900"
          level="small"
          scheme="label"
        >
          Método de pago principal:
        </Text>
        <Text
          as="span"
          className="text-end text-neutral-500"
          level="small"
          scheme="label"
        >
          Tarjeta de débito (Banco Mercantil)
        </Text>
      </div>
      <Separator />
    </div>
    <div className={styles.base__body}>
      <Text as="h5" level="medium" scheme="label">
        Últimas facturas
      </Text>
      <div className={styles.base__invoices}>
        {ChatInvoiceList?.map((invoice: ChatInvoice) => (
          <ChatInvoiceCard key={invoice?.id} open={true} {...invoice} />
        ))}
      </div>
    </div>
  </ChatDetailsTabContentLayout>
);
