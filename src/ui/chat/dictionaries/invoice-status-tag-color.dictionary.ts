import type { TagColor } from '@gnetwork-ui/components/molecules/tags/tag/types';

import { InvoiceStatus } from '@module-invoice/domain/enums/invoice-status.enum';

import { TagColors } from '@gnetwork-ui/components/molecules/tags/tag/enums/tag-colors.enum';

export const invoiceStatusTagColorDictionary: Record<InvoiceStatus, TagColor> =
  {
    [InvoiceStatus.PAID]: TagColors.GREEN,
    [InvoiceStatus.PENDING]: TagColors.YELLOW,
    [InvoiceStatus.EXPIRED]: TagColors.RED,
  };
