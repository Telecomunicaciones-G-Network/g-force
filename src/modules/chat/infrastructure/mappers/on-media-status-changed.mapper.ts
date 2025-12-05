import type { OnMediaStatusChangedResponse } from '../../domain/interfaces';
import type { OnMediaStatusChangedResponseDTO } from '../dtos';

export class OnMediaStatusChangedMapper {
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
