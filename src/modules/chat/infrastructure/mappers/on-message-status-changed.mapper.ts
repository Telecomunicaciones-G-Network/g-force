import type { OnMessageStatusChangedResponse } from '../../domain/interfaces';
import type { OnMessageStatusChangedResponseDTO } from '../dtos';

/**
 * On message status changed mapper
 *
 * This mapper converts the on message status changed response DTO to the on message status changed response domain.
 */
export class OnMessageStatusChangedMapper {
  /**
   * Map from on message status changed response DTO to on message status changed response domain
   *
   * @param input - The on message status changed response DTO
   * @returns The on message status changed response domain
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
