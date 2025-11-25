import type { OnNewMessageReceivedResponse } from '../../domain/interfaces';
import type { OnNewMessageReceivedResponseDTO } from '../dtos';

export class OnNewMessageReceivedMapper {
  static mapFrom(
    input: OnNewMessageReceivedResponseDTO,
  ): OnNewMessageReceivedResponse {
    return {
      contactId: input?.contact_id,
      conversationId: input?.conversation_id,
      conversationStatus: input?.conversation_status,
    };
  }
}
