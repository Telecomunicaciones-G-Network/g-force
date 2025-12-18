import type { InvoiceValues } from '@module-invoice/domain/interfaces';

export interface ChatInvoiceCardProps extends InvoiceValues {
  open?: boolean;
  title?: string;
}
