import type { ApiResponse } from '@module-core/interfaces';
import type { TeamCodename } from '../../domain/types';

export interface GetChatTeamsResult {
  codename: TeamCodename;
  name: string;
}

export type GetChatTeamsResponseDTO = ApiResponse<GetChatTeamsResult[]>;
