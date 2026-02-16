import type { InvoiceStatusName } from '@module-invoice/domain/types';

import { InvoiceStatusNames } from '@module-invoice/domain/enums/invoice-status-names.enum';

export const CHAT_INVOICE_CARD_STATUS_FOR_PAY: InvoiceStatusName[] = [
  InvoiceStatusNames.EXPIRED,
  InvoiceStatusNames.PENDING,
  InvoiceStatusNames.UNPAID,
] as const;
