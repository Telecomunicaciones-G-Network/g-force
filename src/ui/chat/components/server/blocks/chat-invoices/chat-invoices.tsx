'use client';

import type { Invoice } from '@module-invoice/domain/interfaces';
import type { ChatInvoicesProps } from './chat-invoices.props';

import { MdMoodBad } from 'react-icons/md';

import { Icon } from '@gnetwork-ui/components/atoms/icons/icon';
import { Separator } from '@gnetwork-ui/components/atoms/separators/separator';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { ChatDetailsTabContentLayout } from '@ui-chat/layouts/chat-details-tab-content-layout';

import { ChatInvoiceCard } from '@ui-chat/components/server/cards/chat-invoice-card';

import { FloatingModalPaymentReport } from '@ui-payment/components/client/modals/floating-modal-payment-report';

import { ChatInvoicesSkeleton } from './components/chat-invoices-skeleton';

import { useChatInvoices } from './chat-invoices.hook';

import styles from './chat-invoices.module.css';

export const ChatInvoices = ({ title = '' }: Readonly<ChatInvoicesProps>) => {
  const {
    closePaymentFloatingModal,
    cycle,
    invoices,
    isError,
    isFloatingModalOpen,
    isLoading,
    openPaymentFloatingModal,
    selectedInvoice,
  } = useChatInvoices();

  return (
    <>
      <ChatDetailsTabContentLayout title={title}>
        {isLoading && <ChatInvoicesSkeleton />}
        {!isLoading && isError && (
          <div className={styles.base__invoices_empty}>
            <MdMoodBad className="min-h-10 min-w-10 size-10" />
            <Text
              as="h5"
              className="text-center text-neutral-900"
              level="medium"
              scheme="label"
            >
              Ha ocurrido un error al cargar las facturas
            </Text>
          </div>
        )}
        {!isLoading && !isError && (
          <>
            <div className={styles.base__header}>
              {cycle && (
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
                    {cycle}
                  </Text>
                </div>
              )}
              {false && (
                <>
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
                </>
              )}
              <Separator />
            </div>
            <div className={styles.base__body}>
              <Text as="h5" level="medium" scheme="label">
                Últimas facturas
              </Text>
              {invoices?.length === 0 && (
                <div className={styles.base__invoices_empty}>
                  <Icon name="message_info" size={40} />
                  <Text
                    as="h5"
                    className="text-center text-neutral-900"
                    level="medium"
                    scheme="label"
                  >
                    No hay facturas que mostrar
                  </Text>
                </div>
              )}
              {invoices?.length > 0 && (
                <div className={styles.base__invoices}>
                  {invoices?.map((invoice: Invoice, index: number) => (
                    <ChatInvoiceCard
                      key={invoice?.id}
                      invoice={invoice}
                      onPayment={openPaymentFloatingModal}
                      open={true}
                      title={`Factura #${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </ChatDetailsTabContentLayout>
      {isFloatingModalOpen && selectedInvoice && (
        <FloatingModalPaymentReport
          onClose={closePaymentFloatingModal}
          invoice={selectedInvoice}
        />
      )}
    </>
  );
};
