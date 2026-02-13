import type { ApiBaseResponse } from '@module-core/interfaces';

export interface UploadChatMediaResponse
  extends Omit<ApiBaseResponse, 'extra' | 'results'> {
  mediaId: string;
}
