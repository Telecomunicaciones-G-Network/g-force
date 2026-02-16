import type { UploadChatMediaResponse } from '../../domain/interfaces';
import type { UploadChatMediaResponseDTO } from '../dtos';

export class UploadChatMediaMapper {
  static mapFrom(input: UploadChatMediaResponseDTO): UploadChatMediaResponse {
    return {
      error: input?.error,
      mediaId: input?.results?.id ?? '',
      status: input?.status,
      success: input?.success,
    };
  }
}
