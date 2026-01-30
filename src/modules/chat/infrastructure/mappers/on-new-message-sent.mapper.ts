import type { OnNewMessageSentResponse } from '../../domain/interfaces';
import type { OnNewMessageSentResponseDTO } from '../dtos';

/**
 * @name OnNewMessageSentMapper
 *
 * @description This mapper converts the on new message sent response DTO to the on new message sent response domain.
 */
export class OnNewMessageSentMapper {
  /**
   * @name mapFrom
   *
   * @description This method converts the on new message sent response DTO to the on new message sent response domain.
   *
   * @param {OnNewMessageSentResponseDTO} input - The on new message sent response DTO.
   *
   * @returns {OnNewMessageSentResponse} The on new message sent response domain.
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
