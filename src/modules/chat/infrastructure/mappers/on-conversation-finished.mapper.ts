import type { OnConversationFinishedResponse } from '../../domain/interfaces';
import type { OnConversationFinishedResponseDTO } from '../dtos';

/**
 * @name OnConversationFinishedMapper
 *
 * @description This mapper converts the on conversation finished response DTO to the on conversation finished response domain.
 */
export class OnConversationFinishedMapper {
  /**
   * @name mapFrom
   *
   * @description This method converts the on conversation finished response DTO to the on conversation finished response domain.
   *
   * @param {OnConversationFinishedResponseDTO} input - The on conversation finished response DTO.
   *
   * @returns {OnConversationFinishedResponse} The on conversation finished response domain.
   */
  static mapFrom(
    input: OnConversationFinishedResponseDTO,
  ): OnConversationFinishedResponse {
    return {
      contactId: input?.contact_id,
      conversationId: input?.conversation_id,
    };
  }
}
