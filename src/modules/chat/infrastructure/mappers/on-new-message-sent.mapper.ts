import type { OnNewMessageSentResponse } from '../../domain/interfaces';
import type { OnNewMessageSentResponseDTO } from '../dtos';

/**
 * On new message sent mapper
 *
 * This mapper converts the on new message sent response DTO to the on new message sent response domain.
 */
export class OnNewMessageSentMapper {
  /**
   * Map from on new message sent response DTO to on new message sent response domain
   *
   * @param input - The on new message sent response DTO
   * @returns The on new message sent response domain
   */
  static mapFrom(input: OnNewMessageSentResponseDTO): OnNewMessageSentResponse {
    return {
      contactId: input?.contact_id,
      conversationId: input?.conversation_id,
      messageId: input?.message_id,
      messageTextPreview: input?.message_text_preview,
      messageType: input?.message_type,
    };
  }
}
