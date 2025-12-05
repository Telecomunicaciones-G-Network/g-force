import type { MediaStorageStatus } from '../types';

export interface OnMediaStatusChangedResponse {
  mediaId: string;
  messageId: string;
  storageStatus: MediaStorageStatus;
}
