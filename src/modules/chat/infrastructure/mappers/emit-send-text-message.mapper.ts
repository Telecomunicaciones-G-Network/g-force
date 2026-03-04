import type {
  EmitSendTextMessageRequest,
  EmitSendTextMessageResponse,
} from '../../domain/interfaces';
import type {
  EmitSendTextMessageRequestDTO,
  EmitSendTextMessageResponseDTO,
} from '../dtos';

export class EmitSendTextMessageMapper {
  static mapFrom(
    input: EmitSendTextMessageResponseDTO & { id?: string },
  ): EmitSendTextMessageResponse {
    return {
      errorCode: input?.error_code,
      messageId: input?.message_id || input?.id,
      success: input?.success ?? true,
    };
  }

  static mapTo(
    output: Omit<EmitSendTextMessageRequest, 'onSuccess'>,
  ): EmitSendTextMessageRequestDTO | null {
    return {
      contact_id: output?.contactId,
      text: output?.data?.trim(),
    };
  }
}
