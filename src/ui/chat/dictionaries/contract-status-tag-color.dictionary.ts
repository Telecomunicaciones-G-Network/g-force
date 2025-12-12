import type { ContractStatusCode } from '@module-contract/domain/types';

import { TagColors } from '@gnetwork-ui/components/molecules/tags/tag/enums/tag-colors.enum';

import { ContractStatusCodes } from '@module-contract/domain/enums/contract-status-codes.enum';

export const contractStatusTagColorDictionary: Record<
  ContractStatusCode,
  TagColors
> = {
  [ContractStatusCodes.ACTIVE]: TagColors.GREEN,
  [ContractStatusCodes.CANCELLED]: TagColors.RED,
  [ContractStatusCodes.SUSPENDED]: TagColors.YELLOW,
};
