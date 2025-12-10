import { ContractStatus } from '@module-contract/domain/enums/contract-status.enum';

import { TagColors } from '@gnetwork-ui/components/molecules/tags/tag/enums/tag-colors.enum';

export const contractStatusTagColorDictionary: Record<
  ContractStatus,
  TagColors
> = {
  [ContractStatus.ACTIVE]: TagColors.GREEN,
  [ContractStatus.CANCELLED]: TagColors.RED,
  [ContractStatus.SUSPENDED]: TagColors.YELLOW,
};
