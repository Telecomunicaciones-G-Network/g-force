export interface UploadChatMediaRequest {
  file: File | Blob;
  filename: string;
  mediaType: string;
  teamCodename?: string;
}
