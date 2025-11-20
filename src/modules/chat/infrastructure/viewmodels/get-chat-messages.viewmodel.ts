// DONE:

import type { ApiResponse } from '@module-core/interfaces';
import type { MessageValues } from '../../domain/interfaces';

export interface GetChatMessagesViewModel
  extends Partial<Pick<ApiResponse, 'cursor' | 'hasMore' | 'nextCursor'>> {
  messages: Omit<
    MessageValues,
    | 'caption'
    | 'contacts'
    | 'forwarded'
    | 'forwardedManyTimes'
    | 'location'
    | 'media'
    | 'platform'
    | 'platformId'
    | 'reactions'
  >[];
}
