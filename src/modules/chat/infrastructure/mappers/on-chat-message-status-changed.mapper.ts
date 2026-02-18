import type { OnChatMessageStatusChangedResponse } from '../../domain/interfaces';
import type { OnChatMessageStatusChangedResponseDTO } from '../dtos';

/**
 * @name OnChatMessageStatusChangedMapper
 *
 * @description This mapper converts the on message status changed response DTO to the on message status changed response domain.
 */
export class OnChatMessageStatusChangedMapper {
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
    input: OnChatMessageStatusChangedResponseDTO,
  ): OnChatMessageStatusChangedResponse {
    return {
      messageId: input?.message_id,
      status: input?.status,
    };
  }
}
