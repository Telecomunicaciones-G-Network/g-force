export interface UploadFileBody {
  file: File | Blob;
  filename: string;
  mediaType: string;
}
