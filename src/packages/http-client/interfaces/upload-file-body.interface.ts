import { MimeType } from '../types/mimetype.type';

export interface UploadFileBody {
  file: File | Blob;
  filename: string;
  mediaType: MimeType;
}
