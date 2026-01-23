import type { TagColor } from '@gnetwork-ui/components/molecules/tags/tag/types';
import type { TeamCodename } from '@module-chat/domain/types';

import { TagColors } from '@gnetwork-ui/components/molecules/tags/tag/enums/tag-colors.enum';

import { TeamCodenames } from '@module-chat/domain/enums/team-codenames.enum';

export const teamTagColorDictionary: Record<TeamCodename, TagColor> = {
  [TeamCodenames.CUSTOMER]: TagColors.GREEN,
  [TeamCodenames.FAULTS]: TagColors.YELLOW,
  [TeamCodenames.SUPPORT]: TagColors.BLUE,
  [TeamCodenames.SALES]: TagColors.PURPLE,
  [TeamCodenames.MANAGEMENT]: TagColors.GRAY,
};
