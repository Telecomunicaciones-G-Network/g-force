import type { OnConversationsAssignedResponse } from '../../domain/interfaces/on-conversations-assigned-response.interface';
import type { OnConversationsAssignedResponseDTO } from '../dtos';

export class OnConversationsAssignedMapper {
  static mapFrom(
    input: OnConversationsAssignedResponseDTO,
  ): OnConversationsAssignedResponse {
    return {
      contactIds: input?.contact_ids ?? [],
    };
  }
}
