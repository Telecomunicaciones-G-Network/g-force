import type { OnContactFinishedResponse } from '../../domain/interfaces';
import type { OnContactFinishedResponseDTO } from '../dtos';

/**
 * @name OnContactFinishedMapper
 *
 * @description This mapper converts the on contact finished response DTO to the on contact finished response domain.
 */
export class OnContactFinishedMapper {
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
    input: OnContactFinishedResponseDTO,
  ): OnContactFinishedResponse {
    return {
      contactId: input?.contact_id,
      conversationId: input?.conversation_id,
    };
  }
}
