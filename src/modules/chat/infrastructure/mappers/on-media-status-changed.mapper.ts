import type { OnMediaStatusChangedResponse } from '../../domain/interfaces';
import type { OnMediaStatusChangedResponseDTO } from '../dtos';

/**
 * @name OnMediaStatusChangedMapper
 *
 * @description This mapper converts the on media status changed response DTO to the on media status changed response domain.
 */
export class OnMediaStatusChangedMapper {
  /**
   * @name mapFrom
   *
   * @description This method converts the on media status changed response DTO to the on media status changed response domain.
   *
   * @param {OnMediaStatusChangedResponseDTO} input - The on media status changed response DTO.
   *
   * @returns {OnMediaStatusChangedResponse} The on media status changed response domain.
   */
  static mapFrom(
    input: OnMediaStatusChangedResponseDTO,
  ): OnMediaStatusChangedResponse {
    return {
      mediaId: input?.media_id,
      messageId: input?.message_id,
      storageStatus: input?.storage_status,
    };
  }
}
