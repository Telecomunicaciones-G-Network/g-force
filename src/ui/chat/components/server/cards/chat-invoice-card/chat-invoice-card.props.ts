import type { InvoiceValues } from '@module-invoice/domain/interfaces';

export interface ChatInvoiceCardProps {
  invoice: InvoiceValues;
  onPayment?: (invoice: InvoiceValues) => void;
  open?: boolean;
  title?: string;
}
