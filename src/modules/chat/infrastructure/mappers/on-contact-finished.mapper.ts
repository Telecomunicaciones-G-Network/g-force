import type { OnContactFinishedResponse } from '../../domain/interfaces';
import type { OnContactFinishedResponseDTO } from '../dtos';

/**
 * On contact finished mapper
 *
 * This mapper converts the on contact finished response DTO to the on contact finished response domain.
 */
export class OnContactFinishedMapper {
  /**
   * Map from on contact finished response DTO to on contact finished response domain
   *
   * @param input - The on contact finished response DTO
   * @returns The on contact finished response domain
   */
  static mapFrom(
    input: OnContactFinishedResponseDTO,
  ): OnContactFinishedResponse {
    return {
      contactId: input?.contact_id,
      conversationId: input?.conversation_id,
    };
  }
}
