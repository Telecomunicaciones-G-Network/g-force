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
    input: EmitSendImageMessageResponseDTO,
  ): EmitSendImageMessageResponse {
    return {
      errorCode: input?.error_code,
      messageId: input?.message_id,
      success: input?.success,
    };
  }

  static mapTo(
    output: Omit<EmitSendImageMessageRequest, 'message' | 'onSuccess'>,
  ): EmitSendImageMessageRequestDTO {
    return {
      contact_id: output?.contactId,
      media_id: output?.mediaId,
    };
  }
}
