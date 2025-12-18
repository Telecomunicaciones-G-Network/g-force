import type { OnConversationAssignmentUpdatedResponse } from '../../domain/interfaces';
import type { OnContactAssignmentUpdatedResponseDTO } from '../dtos';

import { teamNameDictionary } from '../dictionaries/team-name.dictionary';

export class OnContactAssignmentUpdatedMapper {
  static mapFrom(
    input: OnContactAssignmentUpdatedResponseDTO,
  ): OnConversationAssignmentUpdatedResponse {
    return {
      agentId: input?.agent_id ?? '',
      agentName: input?.agent_full_name ?? '',
      contactId: input?.contact_id ?? '',
      teamId: input?.team_codename ?? '',
      teamName: teamNameDictionary[input?.team_codename] ?? '',
    };
  }
}
