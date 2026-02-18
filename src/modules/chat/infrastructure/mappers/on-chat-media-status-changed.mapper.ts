import type { OnChatMediaStatusChangedResponse } from '../../domain/interfaces';
import type { OnChatMediaStatusChangedResponseDTO } from '../dtos';

/**
 * @name OnChatMediaStatusChangedMapper
 *
 * @description This mapper converts the on media status changed response DTO to the on media status changed response domain.
 */
export class OnChatMediaStatusChangedMapper {
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
    input: OnChatMediaStatusChangedResponseDTO,
  ): OnChatMediaStatusChangedResponse {
    return {
      mediaId: input?.media_id,
      messageId: input?.message_id,
      storageStatus: input?.storage_status,
    };
  }
}
