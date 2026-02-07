import type { ApiResponse } from '@module-core/interfaces';

export interface UploadChatMediaResponse
  extends Omit<ApiResponse, 'extra' | 'results'> {
  mediaId: string;
}
