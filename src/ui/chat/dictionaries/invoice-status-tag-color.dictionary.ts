import type { TagColor } from '@gnetwork-ui/components/molecules/tags/tag/types';
import type { InvoiceStatusName } from '@module-invoice/domain/types';

import { TagColors } from '@gnetwork-ui/components/molecules/tags/tag/enums/tag-colors.enum';
import { InvoiceStatusNames } from '@module-invoice/domain/enums/invoice-status-names.enum';

export const invoiceStatusTagColorDictionary: Record<
  InvoiceStatusName,
  TagColor
> = {
  [InvoiceStatusNames.UNPAID]: TagColors.RED,
  [InvoiceStatusNames.EXPIRED]: TagColors.RED,
  [InvoiceStatusNames.PAID]: TagColors.GREEN,
  [InvoiceStatusNames.PENDING]: TagColors.YELLOW,
};
