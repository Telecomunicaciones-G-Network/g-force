import type { MediaStorageStatus, MediaType } from '../types';

export interface MediaValues {
  id: string;
  downloadUrl: string | null;
  filename: string;
  mimeType: string;
  storageStatus: MediaStorageStatus;
  type: MediaType;
}
