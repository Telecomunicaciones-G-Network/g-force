import type { OnChatConversationFinishedResponse } from '../../domain/interfaces';
import type { OnChatConversationFinishedResponseDTO } from '../dtos';

/**
 * @name OnChatConversationFinishedMapper
 *
 * @description This mapper converts the on conversation finished response DTO to the on conversation finished response domain.
 */
export class OnChatConversationFinishedMapper {
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
    input: OnChatConversationFinishedResponseDTO,
  ): OnChatConversationFinishedResponse {
    return {
      contactId: input?.contact_id,
      conversationId: input?.conversation_id,
    };
  }
}
