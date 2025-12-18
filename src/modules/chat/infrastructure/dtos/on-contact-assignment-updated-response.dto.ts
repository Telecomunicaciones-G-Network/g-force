import type { TeamCodename } from '../../domain/types';

export interface OnContactAssignmentUpdatedResponseDTO {
  agent_id: string;
  agent_full_name: string;
  contact_id: string;
  conversation_id: string;
  team_codename: TeamCodename;
}
