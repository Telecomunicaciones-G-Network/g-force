import type { OnMessageStatusChangedResponse } from '../../domain/interfaces';
import type { OnMessageStatusChangedResponseDTO } from '../dtos';

/**
 * @name OnMessageStatusChangedMapper
 *
 * @description This mapper converts the on message status changed response DTO to the on message status changed response domain.
 */
export class OnMessageStatusChangedMapper {
  /**
   * @name mapFrom
   *
   * @description This method converts the on message status changed response DTO to the on message status changed response domain.
   *
   * @param {OnMessageStatusChangedResponseDTO} input - The on message status changed response DTO.
   *
   * @returns {OnMessageStatusChangedResponse} The on message status changed response domain.
   */
  static mapFrom(
    input: OnMessageStatusChangedResponseDTO,
  ): OnMessageStatusChangedResponse {
    return {
      messageId: input?.message_id,
      status: input?.status,
    };
  }
}
