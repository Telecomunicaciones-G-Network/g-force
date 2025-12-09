import type { InvoiceStatus } from '../../domain/types';

import { InvoiceStatus as InvoiceStatusValues } from '../../domain/enums/invoice-status.enum';

export const invoiceStatusDictionary: Record<InvoiceStatus, string> = {
  [InvoiceStatusValues.PAID]: 'Pagada',
  [InvoiceStatusValues.PENDING]: 'Pendiente',
  [InvoiceStatusValues.EXPIRED]: 'Vencida',
};
