import type { OnContactConversationAssignmentUpdatedResponse } from '../../domain/interfaces';
import type { OnContactConversationAssignmentUpdatedResponseDTO } from '../dtos';

/**
 * @name OnContactConversationAssignmentUpdatedMapper
 *
 * @description This mapper converts the on contact assignment updated response DTO to the on conversation assignment updated response domain.
 */
export class OnContactConversationAssignmentUpdatedMapper {
  /**
   * @name mapFrom
   *
   * @description This method converts the on contact assignment updated response DTO to the on conversation assignment updated response domain.
   *
   * @param {OnContactConversationAssignmentUpdatedResponseDTO} input - The on contact assignment updated response DTO.
   *
   * @returns {OnConversationAssignmentUpdatedResponse} The on conversation assignment updated response domain.
   */
  static mapFrom(
    input: OnContactConversationAssignmentUpdatedResponseDTO,
  ): OnContactConversationAssignmentUpdatedResponse {
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
