import type { InvoiceValues } from '@module-invoice/domain/interfaces';

export interface ChatInvoiceCardProps extends InvoiceValues {
  onPayment?: () => void;
  open?: boolean;
  title?: string;
}
