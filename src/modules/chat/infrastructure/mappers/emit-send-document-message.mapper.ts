import type {
  EmitSendDocumentMessageRequest,
  EmitSendDocumentMessageResponse,
} from '../../domain/interfaces';
import type { EmitSendDocumentMessageRequestDTO } from '../dtos';

export class EmitSendDocumentMessageMapper {
  static mapFrom(
    // biome-ignore lint/suspicious/noExplicitAny: backend response shape varies
    input: Record<string, any>,
  ): EmitSendDocumentMessageResponse {
    const messageId =
      input?.message_id ??
      input?.id ??
      input?.data?.message_id ??
      input?.data?.id;

    return {
      errorCode: input?.error_code ?? input?.error,
      messageId,
      success: input?.success ?? !!messageId,
    };
  }

  static mapTo(
    output: Omit<EmitSendDocumentMessageRequest, 'onSuccess'>,
  ): EmitSendDocumentMessageRequestDTO {
    return {
      contact_id: output?.contactId,
      media_id: output?.mediaId,
      text: output?.message,
    };
  }
}
