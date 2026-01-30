import type { OnConversationAssignmentUpdatedResponse } from '../../domain/interfaces';
import type { OnContactAssignmentUpdatedResponseDTO } from '../dtos';

/**
 * @name OnContactAssignmentUpdatedMapper
 *
 * @description This mapper converts the on contact assignment updated response DTO to the on conversation assignment updated response domain.
 */
export class OnContactAssignmentUpdatedMapper {
  /**
   * @name mapFrom
   *
   * @description This method converts the on contact assignment updated response DTO to the on conversation assignment updated response domain.
   *
   * @param {OnContactAssignmentUpdatedResponseDTO} input - The on contact assignment updated response DTO.
   *
   * @returns {OnConversationAssignmentUpdatedResponse} The on conversation assignment updated response domain.
   */
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
