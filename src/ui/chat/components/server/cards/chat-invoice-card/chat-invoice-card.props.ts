import type { InvoiceValues } from '@module-invoice/domain/interfaces';

export interface ChatInvoiceCardProps extends InvoiceValues {
  invoicingCycle?: string;
  open?: boolean;
  title?: string;
}
