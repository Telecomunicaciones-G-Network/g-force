import type { ApiResponse } from '@module-core/interfaces';
import type { TeamValues } from './team-values.interface';

export interface GetChatTeamsResponse
  extends Omit<ApiResponse, 'extra' | 'results'> {
  teams: TeamValues[];
}
