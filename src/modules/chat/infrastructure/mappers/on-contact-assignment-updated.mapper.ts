import type { OnConversationAssignmentUpdatedResponse } from '../../domain/interfaces';
import type { OnContactAssignmentUpdatedResponseDTO } from '../dtos';

export class OnContactAssignmentUpdatedMapper {
  static mapFrom(
    input: OnContactAssignmentUpdatedResponseDTO,
  ): OnConversationAssignmentUpdatedResponse {
    return {
      agent: {
        id: input?.agent?.id,
        name: input?.agent?.full_name,
      },
      contactId: input?.contact_id,
      conversationId: input?.conversation_id,
      team: {
        id: input?.team?.codename,
        name: input?.team?.name,
      },
    };
  }
}
