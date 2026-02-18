import type { OnContactConversationFinishedResponse } from '../../domain/interfaces';
import type { OnContactConversationFinishedResponseDTO } from '../dtos';

/**
 * @name OnContactConversationFinishedMapper
 *
 * @description This mapper converts the on contact finished response DTO to the on contact finished response domain.
 */
export class OnContactConversationFinishedMapper {
  /**
   * @name mapFrom
   *
   * @description This method converts the on contact finished response DTO to the on contact finished response domain.
   *
   * @param {OnContactFinishedResponseDTO} input - The on contact finished response DTO.
   *
   * @returns {OnContactFinishedResponse} The on contact finished response domain.
   */
  static mapFrom(
    input: OnContactConversationFinishedResponseDTO,
  ): OnContactConversationFinishedResponse {
    return {
      contactId: input?.contact_id,
      conversationId: input?.conversation_id,
    };
  }
}
