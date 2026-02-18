import type { OnContactMessageReceivedResponse } from '../../domain/interfaces';
import type { OnContactMessageReceivedResponseDTO } from '../dtos';

/**
 * @name OnContactMessageReceivedMapper
 *
 * @description This mapper converts the on new message received response DTO to the on new message received response domain.
 */
export class OnContactMessageReceivedMapper {
  /**
   * @name mapFrom
   *
   * @description This method converts the on new message received response DTO to the on new message received response domain.
   *
   * @param {OnNewMessageReceivedResponseDTO} input - The on new message received response DTO.
   *
   * @returns {OnNewMessageReceivedResponse} The on new message received response domain.
   */
  static mapFrom(
    input: OnContactMessageReceivedResponseDTO,
  ): OnContactMessageReceivedResponse {
    return {
      contactId: input?.contact_id,
      conversationId: input?.conversation_id,
      messageId: input?.message_id,
      messageTextPreview: input?.message_text_preview,
      messageType: input?.message_type,
    };
  }
}
