import type { ApiResponse } from '@module-core/interfaces';
import type { Team } from './team.interface';

export interface GetChatTeamsResponse
  extends Omit<ApiResponse, 'extra' | 'results'> {
  teams: Team[];
}
