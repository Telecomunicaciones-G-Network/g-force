import type { MediaStorageStatus } from '../../domain/types';

export interface OnMediaStatusChangedResponseDTO {
  media_id: string;
  message_id: string;
  storage_status: MediaStorageStatus;
}
