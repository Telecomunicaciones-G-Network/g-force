import type { Invoice } from '@module-invoice/domain/interfaces';

export interface ChatInvoiceCardProps {
  invoice: Invoice;
  onPayment?: (invoice: Invoice) => void;
  open?: boolean;
  title?: string;
}
