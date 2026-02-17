import type { TeamCodename } from '@module-chat/domain/types';

import { TeamCodenames } from '@module-chat/domain/enums/team-codenames.enum';

/**
 * @name TEAM_CODENAMES
 *
 * @description This constant is used to define the team codenames.
 */
export const TEAM_CODENAMES = Object.values(TeamCodenames) as TeamCodename[];
