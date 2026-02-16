import type { OnNewMessageReceivedResponse } from '../../domain/interfaces';
import type { OnNewMessageReceivedResponseDTO } from '../dtos';

/**
 * @name OnNewMessageReceivedMapper
 *
 * @description This mapper converts the on new message received response DTO to the on new message received response domain.
 */
export class OnNewMessageReceivedMapper {
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
