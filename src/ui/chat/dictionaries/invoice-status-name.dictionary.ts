import type { InvoiceStatusName } from '@module-invoice/domain/types';

import { InvoiceStatusNames } from '@module-invoice/domain/enums/invoice-status-names.enum';

export const invoiceStatusNameDictionary: Record<InvoiceStatusName, string> = {
  [InvoiceStatusNames.EXPIRED]: 'Vencida',
  [InvoiceStatusNames.PAID]: 'Pagada',
  [InvoiceStatusNames.PENDING]: 'Pendiente',
};
