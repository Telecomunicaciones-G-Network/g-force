import type {
  EmitSendImageMessageRequest,
  EmitSendImageMessageResponse,
} from '../../domain/interfaces';
import type {
  EmitSendImageMessageRequestDTO,
  EmitSendImageMessageResponseDTO,
} from '../dtos';

export class EmitSendImageMessageMapper {
  static mapFrom(
    input: EmitSendImageMessageResponseDTO & { id?: string },
  ): EmitSendImageMessageResponse {
    return {
      errorCode: input?.error_code,
      messageId: input?.message_id || input?.id,
      success: input?.success ?? true,
    };
  }

  static mapTo(
    output: Omit<EmitSendImageMessageRequest, 'onSuccess'>,
  ): EmitSendImageMessageRequestDTO {
    return {
      contact_id: output?.contactId,
      media_id: output?.mediaId,
      text: output?.message,
    };
  }
}
