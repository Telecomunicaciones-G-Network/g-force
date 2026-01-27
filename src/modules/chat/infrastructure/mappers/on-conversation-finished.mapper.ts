import type { OnConversationFinishedResponse } from '../../domain/interfaces';
import type { OnConversationFinishedResponseDTO } from '../dtos';

/**
 * On conversation finished mapper
 *
 * This mapper converts the on conversation finished response DTO to the on conversation finished response domain.
 */
export class OnConversationFinishedMapper {
  /**
   * Map from on conversation finished response DTO to on conversation finished response domain
   *
   * @param input - The on conversation finished response DTO
   *
   * @returns The on conversation finished response domain
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
