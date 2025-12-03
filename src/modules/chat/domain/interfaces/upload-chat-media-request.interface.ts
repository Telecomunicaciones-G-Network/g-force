import type { MimeType } from '@http-client/types/mimetype.type';

export interface UploadChatMediaRequest {
  file: File | Blob;
  filename: string;
  mediaType: MimeType;
}
