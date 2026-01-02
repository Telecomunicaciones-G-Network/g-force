import type { TeamCodename } from '../../domain/types';

export interface OnContactAssignmentUpdatedResponseAgentDTO {
  full_name: string;
  id: string;
}

export interface OnContactAssignmentUpdatedResponseTeamDTO {
  codename: TeamCodename;
  name: string;
}

export interface OnContactAssignmentUpdatedResponseDTO {
  agent: OnContactAssignmentUpdatedResponseAgentDTO;
  contact_id: string;
  conversation_id: string;
  team: OnContactAssignmentUpdatedResponseTeamDTO;
}
