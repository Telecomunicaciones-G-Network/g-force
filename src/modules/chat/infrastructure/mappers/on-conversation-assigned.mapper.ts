import type { OnConversationsAssignedResponse } from '../../domain/interfaces/on-conversations-assigned-response.interface';
import type { OnConversationAssignedResponseDTO } from '../dtos';

export class OnConversationAssignedMapper {
  static mapFrom(
    input: OnConversationAssignedResponseDTO,
  ): OnConversationsAssignedResponse {
    return {
      contactIds: input?.contact_ids ?? [],
    };
  }
}
