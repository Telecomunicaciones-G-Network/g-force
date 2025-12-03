import type { UploadChatMediaResponse } from '../../domain/interfaces';
import type { UploadChatMediaResponseDTO } from '../dtos';

export class UploadChatMediaMapper {
  static mapFrom(input: UploadChatMediaResponseDTO): UploadChatMediaResponse {
    return {
      mediaId: input?.results?.id,
    };
  }
}
