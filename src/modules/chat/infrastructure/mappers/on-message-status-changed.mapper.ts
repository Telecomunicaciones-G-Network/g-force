import type { OnMessageStatusChangedResponse } from '../../domain/interfaces';
import type { OnMessageStatusChangedResponseDTO } from '../dtos';

export class OnMessageStatusChangedMapper {
  static mapFrom(
    input: OnMessageStatusChangedResponseDTO,
  ): OnMessageStatusChangedResponse {
    return {
      messageId: input?.message_id,
      status: input?.status,
    };
  }
}
