import type { OnNewMessageReceivedResponse } from '../../domain/interfaces';
import type { OnNewMessageReceivedResponseDTO } from '../dtos';

export class OnNewMessageReceivedMapper {
  static mapFrom(
    input: OnNewMessageReceivedResponseDTO,
  ): OnNewMessageReceivedResponse {
    return {
      contactId: input?.contact_id,
      conversationId: input?.conversation_id,
      messageId: input?.message_id,
      messageTextPreview: input?.message_text_preview,
      messageType: input?.message_type,
    };
  }
}
