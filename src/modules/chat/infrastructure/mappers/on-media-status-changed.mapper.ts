import type { OnMediaStatusChangedResponse } from '../../domain/interfaces';
import type { OnMediaStatusChangedResponseDTO } from '../dtos';

/**
 * On media status changed mapper
 *
 * This mapper converts the on media status changed response DTO to the on media status changed response domain.
 */
export class OnMediaStatusChangedMapper {
  /**
   * Map from on media status changed response DTO to on media status changed response domain
   *
   * @param input - The on media status changed response DTO
   * @returns The on media status changed response domain
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
